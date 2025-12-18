"use client";

import { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export default function HospitalRouteMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const userMarker = useRef<maplibregl.Marker | null>(null);
  const destMarker = useRef<maplibregl.Marker | null>(null);

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  // Initialize map & get high-accuracy user location
  useEffect(() => {
    if (!mapContainer.current || mapRef.current) return;

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setUserLocation({ lat: latitude, lng: longitude });

        const map = new maplibregl.Map({
          container: mapContainer.current!,
          style: "https://demotiles.maplibre.org/style.json",
          center: [longitude, latitude],
          zoom: 14,
        });

        mapRef.current = map;

        map.on("load", () => {
          map.resize();

          userMarker.current = new maplibregl.Marker({ color: "#22c55e" })
            .setLngLat([longitude, latitude])
            .addTo(map);

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

        const resizeHandler = () => map.resize();
        window.addEventListener("resize", resizeHandler);

        return () => {
          window.removeEventListener("resize", resizeHandler);
          mapRef.current?.remove();
          mapRef.current = null;
        };
      },
      () => alert("Location access denied"),
      { enableHighAccuracy: true }
    );

    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  // Fetch suggestions based on user query
  const fetchHospitalSuggestions = async (input: string) => {
    if (!userLocation) return;
    if (!input) return setSuggestions([]);

    setLoading(true);
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          input + " hospital"
        )}&limit=5&lat=${userLocation.lat}&lon=${userLocation.lng}`,
        {
          headers: {
            "User-Agent": "HospitalRouteApp/1.0 (contact@example.com)",
          },
        }
      );

      const data = await res.json();
      setSuggestions(
        data.map((d: any) => ({
          name: d.display_name,
          lat: parseFloat(d.lat),
          lon: parseFloat(d.lon),
        }))
      );
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectHospital = async (lat: number, lon: number) => {
    if (!mapRef.current || !userMarker.current) return;

    const map = mapRef.current;
    destMarker.current?.remove();

    destMarker.current = new maplibregl.Marker({ color: "#ff0000" })
      .setLngLat([lon, lat])
      .addTo(map);

    const userPos = userMarker.current.getLngLat();

    try {
      const routeRes = await fetch(
        `https://router.project-osrm.org/route/v1/driving/${userPos.lng},${userPos.lat};${lon},${lat}?overview=full&geometries=geojson`
      );
      const routeData = await routeRes.json();
      const route = routeData.routes[0];

      if (map.getLayer("route")) map.removeLayer("route");
      if (map.getSource("route")) map.removeSource("route");

      map.addSource("route", {
        type: "geojson",
        data: { type: "Feature", geometry: route.geometry },
      });
      map.addLayer({
        id: "route",
        type: "line",
        source: "route",
        paint: { "line-color": "#22c55e", "line-width": 5 },
      });

      const bounds = new maplibregl.LngLatBounds();
      bounds.extend([userPos.lng, userPos.lat]);
      bounds.extend([lon, lat]);
      map.fitBounds(bounds, { padding: 80, maxZoom: 16, duration: 1000 });

      setSuggestions([]); // hide suggestions after selection
      setQuery(""); // clear search box
    } catch (err) {
      console.error(err);
      alert("Failed to fetch route");
    }
  };

  return (
    <>
      {/* Search Box */}
      <div
        style={{
          position: "fixed",
          top: 16,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 9999,
        }}
      >
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            fetchHospitalSuggestions(e.target.value);
          }}
          placeholder="Search nearby hospital…"
          style={{
            width: 300,
            padding: "10px 14px",
            borderRadius: 10,
            border: "1px solid #ccc",
            outline: "none",
            background: "white",
            fontWeight: "bold",
            color: "black",
          }}
        />
        {loading && <span style={{ marginLeft: 8 }}>⏳</span>}
        {/* Suggestions */}
        <div>
          {suggestions.map((sug) => (
            <div
              key={`${sug.lat}-${sug.lon}`}
              onClick={() => handleSelectHospital(sug.lat, sug.lon)}
              style={{
                padding: "8px 12px",
                cursor: "pointer",
                backgroundColor: "white",
                borderRadius: 8,
                border: "1px solid #ccc",
                marginTop: 4,
                fontWeight: "bold",
                color: "black",
                maxWidth: 300,
              }}
            >
              {sug.name}
            </div>
          ))}
        </div>
      </div>

      {/* Map */}
      <div
        ref={mapContainer}
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
        }}
      />
    </>
  );
}
