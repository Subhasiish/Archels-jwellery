"use client";

import { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import type { LineString } from "geojson";

type Location = { lat: number; lng: number };
type HospitalSuggestion = { name: string; lat: number; lon: number; distance: number };

export default function RouteFinderMap() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const userMarker = useRef<maplibregl.Marker | null>(null);
  const destMarker = useRef<maplibregl.Marker | null>(null);

  const [userLocation, setUserLocation] = useState<Location | null>(null);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<HospitalSuggestion[]>([]);
  const [loading, setLoading] = useState(false);
  const [gpsStatus, setGpsStatus] = useState<string>("Fetching location...");

  /* ---------- FULLSCREEN BODY ---------- */
  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.overflow = "hidden";
  }, []);

  /* ---------- INIT MAP & HIGH-ACCURACY GPS ---------- */
  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new maplibregl.Map({
      container: mapContainer.current,
      center: [0, 0],
      zoom: 2,
      style: {
        version: 8,
        sources: {
          satellite: {
            type: "raster",
            tiles: [
              "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
            ],
            tileSize: 256,
          },
        },
        layers: [{ id: "satellite", type: "raster", source: "satellite" }],
      },
    });

    mapRef.current = map;

    // Click to manually set location
    map.on("click", (e) => {
      const { lat, lng } = e.lngLat;
      setUserLocation({ lat, lng });
      setGpsStatus("Location set manually");
      if (!userMarker.current) {
        userMarker.current = new maplibregl.Marker({ color: "#22c55e" })
          .setLngLat([lng, lat])
          .addTo(map);
      } else {
        userMarker.current.setLngLat([lng, lat]);
      }
      map.flyTo({ center: [lng, lat], zoom: 15 });
    });

    // Watch high-accuracy GPS
    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        const { latitude, longitude, accuracy } = pos.coords;
        setUserLocation({ lat: latitude, lng: longitude });

        if (!userMarker.current) {
          const el = document.createElement("div");
          el.style.width = "20px";
          el.style.height = "20px";
          el.style.borderRadius = "50%";
          el.style.background = "#22c55e";
          el.style.border = "2px solid white";
          el.style.boxShadow = "0 0 8px #22c55e";
          el.className = "pulse-marker";

          userMarker.current = new maplibregl.Marker({ element: el })
            .setLngLat([longitude, latitude])
            .addTo(map);
        } else {
          userMarker.current.setLngLat([longitude, latitude]);
        }

        map.flyTo({ center: [longitude, latitude], zoom: 15 });
        setGpsStatus(`GPS located (${accuracy.toFixed(1)} m accuracy)`);
      },
      () => setGpsStatus("GPS failed. Click map to set location."),
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
    );

    window.addEventListener("resize", () => map.resize());
    return () => {
      navigator.geolocation.clearWatch(watchId);
      map.remove();
    };
  }, []);

  /* ---------- DISTANCE CALCULATION ---------- */
  const getDistanceKm = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) ** 2;
    return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
  };

  /* ---------- FETCH HOSPITAL SUGGESTIONS (DEBOUNCED) ---------- */
  let timeoutId: NodeJS.Timeout;
  const fetchSuggestions = (text: string) => {
    if (!userLocation || text.length < 2) {
      setSuggestions([]);
      return;
    }

    clearTimeout(timeoutId);
    timeoutId = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
            text + " hospital"
          )}&limit=10&lat=${userLocation.lat}&lon=${userLocation.lng}`,
          { headers: { "User-Agent": "RouteFinder/1.0" } }
        );
        const data: any[] = await res.json();

        // ✅ Explicitly type callback parameters
        const nearby = data
          .map((d: any): HospitalSuggestion => {
            const lat = parseFloat(d.lat);
            const lon = parseFloat(d.lon);
            const distance = getDistanceKm(userLocation.lat, userLocation.lng, lat, lon);
            return { name: d.display_name, lat, lon, distance };
          })
          .filter((h: HospitalSuggestion) => h.distance <= 10)
          .sort((a: HospitalSuggestion, b: HospitalSuggestion) => a.distance - b.distance);

        setSuggestions(nearby);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }, 300);
  };

  /* ---------- DRAW ROUTE ---------- */
  const drawRoute = async (lat: number, lon: number) => {
    if (!mapRef.current || !userLocation) return;
    setSuggestions([]);
    setQuery("");

    const res = await fetch(
      `https://router.project-osrm.org/route/v1/driving/${userLocation.lng},${userLocation.lat};${lon},${lat}?overview=full&geometries=geojson`
    );
    const json = await res.json();
    const geometry = json.routes[0].geometry as LineString;

    const map = mapRef.current;

    if (map.getSource("route")) {
      if (map.getLayer("route-line")) map.removeLayer("route-line");
      map.removeSource("route");
    }

    map.addSource("route", { type: "geojson", data: { type: "Feature", properties: {}, geometry } });
    map.addLayer({ id: "route-line", type: "line", source: "route", paint: { "line-color": "#2563eb", "line-width": 5 } });

    if (destMarker.current) destMarker.current.remove();
    destMarker.current = new maplibregl.Marker({ color: "red" }).setLngLat([lon, lat]).addTo(map);

    map.flyTo({ center: [lon, lat], zoom: 15 });
  };

  const recenterLocation = () => {
    if (!mapRef.current || !userLocation) return;
    mapRef.current.flyTo({ center: [userLocation.lng, userLocation.lat], zoom: 15 });
  };

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 16,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 20,
          width: 320,
          background: "white",
          borderRadius: 10,
          padding: 10,
        }}
      >
        <p style={{ fontSize: 12, margin: 0, color: "gray" }}>{gpsStatus}</p>
        <input
          value={query}
          placeholder="Find nearby hospital"
          onChange={(e) => {
            setQuery(e.target.value);
            fetchSuggestions(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && suggestions[0]) drawRoute(suggestions[0].lat, suggestions[0].lon);
          }}
          style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid #ccc", marginTop: 4 }}
        />
        {loading && <p style={{ fontSize: 12 }}>Fetching hospitals…</p>}
        {suggestions.map((s, i) => (
          <div key={i} onClick={() => drawRoute(s.lat, s.lon)} style={{ padding: 6, cursor: "pointer", fontSize: 13 }}>
            {s.name} ({s.distance.toFixed(1)} km)
          </div>
        ))}
      </div>

      <button
        onClick={recenterLocation}
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 20,
          background: "#22c55e",
          color: "white",
          padding: "12px 16px",
          borderRadius: 999,
          border: "none",
          fontSize: 16,
          cursor: "pointer",
        }}
      >
        📍
      </button>

      <div ref={mapContainer} style={{ position: "fixed", inset: 0, width: "100vw", height: "100dvh", zIndex: 0 }} />

      <style>
        {`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.5); opacity: 0.3; }
          100% { transform: scale(1); opacity: 0.7; }
        }
        .pulse-marker { animation: pulse 1.5s infinite; }
      `}
      </style>
    </>
  );
}
