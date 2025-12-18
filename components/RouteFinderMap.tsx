"use client";

import { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export default function RouteFinderPage() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);

  const userMarker = useRef<maplibregl.Marker | null>(null);
  const destMarker = useRef<maplibregl.Marker | null>(null);

  const [query, setQuery] = useState("");

  /* 1️⃣ INIT MAP + USER LOCATION (VECTOR FIRST — SAFE) */
  useEffect(() => {
    if (!mapContainer.current || mapRef.current) return;

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;

        const map = new maplibregl.Map({
          container: mapContainer.current!,
          style: "https://demotiles.maplibre.org/style.json", // ✅ SAFE VECTOR
          center: [longitude, latitude],
          zoom: 14,
        });

        mapRef.current = map;

        map.on("load", () => {
          /* USER MARKER */
          userMarker.current = new maplibregl.Marker({ color: "#22c55e" })
            .setLngLat([longitude, latitude])
            .addTo(map);

          /* SATELLITE LAYER (ADDED AFTER LOAD — SAFE) */
          map.addSource("satellite", {
            type: "raster",
            tiles: [
              "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
            ],
            tileSize: 256,
          });

          map.addLayer({
            id: "satellite",
            type: "raster",
            source: "satellite",
          });
        });
      },
      () => alert("Location access denied")
    );

    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  /* 2️⃣ SEARCH + ROUTE */
  async function findRoute() {
    if (!mapRef.current || !query || !userMarker.current) return;

    const map = mapRef.current;

    /* FREE GEOCODING */
    const geoRes = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        query
      )}&limit=1`
    );
    const geoData = await geoRes.json();
    if (!geoData.length) return alert("Location not found");

    const destLng = parseFloat(geoData[0].lon);
    const destLat = parseFloat(geoData[0].lat);

    const userLngLat = userMarker.current.getLngLat();

    /* CLEAN OLD */
    destMarker.current?.remove();
    if (map.getLayer("route")) map.removeLayer("route");
    if (map.getSource("route")) map.removeSource("route");

    /* DEST MARKER */
    destMarker.current = new maplibregl.Marker({ color: "#000" })
      .setLngLat([destLng, destLat])
      .addTo(map);

    /* SHORTEST ROUTE (OSRM) */
    const routeRes = await fetch(
      `https://router.project-osrm.org/route/v1/driving/${userLngLat.lng},${userLngLat.lat};${destLng},${destLat}?overview=full&geometries=geojson`
    );
    const routeData = await routeRes.json();
    const route = routeData.routes[0];

    map.addSource("route", {
      type: "geojson",
      data: {
        type: "Feature",
        geometry: route.geometry,
      },
    });

    map.addLayer({
      id: "route",
      type: "line",
      source: "route",
      paint: {
        "line-color": "#22c55e",
        "line-width": 6,
      },
    });

    const bounds = route.geometry.coordinates.reduce(
      (b: maplibregl.LngLatBounds, c: number[]) => b.extend(c),
      new maplibregl.LngLatBounds(
        route.geometry.coordinates[0],
        route.geometry.coordinates[0]
      )
    );

    map.fitBounds(bounds, { padding: 80 });
  }

  return (
    <div className="w-screen h-screen relative">
      {/* SEARCH BAR */}
      <div className="absolute top-4 left-1/2 z-10 flex gap-2 -translate-x-1/2 bg-white p-2 rounded shadow">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter destination"
          className="border px-3 py-2 rounded w-64 text-black"
        />
        <button
          onClick={findRoute}
          className="bg-green-600 text-white px-4 rounded"
        >
          Go
        </button>
      </div>

      {/* MAP */}
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
}
