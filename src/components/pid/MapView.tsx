import { useEffect, useRef } from "react";
import L from "leaflet";

export function MapView() {
  const ref = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!ref.current || mapRef.current) return;
    const map = L.map(ref.current, {
      center: [-19.49, -42.54], // Vale do Aço, MG
      zoom: 12,
      zoomControl: false,
      attributionControl: true,
    });
    L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      {
        attribution: "Tiles © Esri",
        maxZoom: 19,
      },
    ).addTo(map);
    L.control.zoom({ position: "topleft" }).addTo(map);

    // Sample AOI rectangle
    const bounds: L.LatLngBoundsLiteral = [
      [-19.55, -42.62],
      [-19.43, -42.46],
    ];
    L.rectangle(bounds, {
      color: "#5eead4",
      weight: 2,
      fillOpacity: 0.05,
      dashArray: "4 4",
    }).addTo(map);

    mapRef.current = map;
    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div className="absolute inset-0">
      <div ref={ref} className="h-full w-full" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/40" />
    </div>
  );
}
