import { useEffect, useRef } from "react";
import L from "leaflet";

export function MapView() {
  const ref = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!ref.current || mapRef.current) return;
    const map = L.map(ref.current, {
      center: [-14.5, -54],
      zoom: 4,
      zoomControl: false,
      attributionControl: true,
      worldCopyJump: true,
    });

    // Light basemap with country/state borders + city labels (Esri Light Gray + reference)
    L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",
      { attribution: "Tiles © Esri", maxZoom: 16 },
    ).addTo(map);

    // Boundaries & places overlay (country, state, city labels)
    L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}",
      { maxZoom: 16, opacity: 0.95 },
    ).addTo(map);

    L.control.zoom({ position: "topleft" }).addTo(map);

    mapRef.current = map;
    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div className="absolute inset-0">
      <div ref={ref} className="h-full w-full" />
    </div>
  );
}
