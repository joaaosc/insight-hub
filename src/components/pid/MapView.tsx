import { useEffect, useRef } from "react";
import L from "leaflet";

export function MapView() {
  const ref = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!ref.current || mapRef.current) return;
    const map = L.map(ref.current, {
      center: [-15, -55],
      zoom: 4,
      zoomControl: false,
      attributionControl: true,
      worldCopyJump: true,
    });

    // Esri World Terrain Base — light, hillshaded continents look like the original PID
    L.tileLayer(
      "https://services.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}",
      {
        attribution: "Esri | TomTom | USGS | FAO | NOAA",
        maxZoom: 13,
      },
    ).addTo(map);

    mapRef.current = map;
    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return <div ref={ref} className="absolute inset-0 h-full w-full" />;
}
