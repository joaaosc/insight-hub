import { useEffect, useRef } from "react";

export function MapView() {
  const ref = useRef<HTMLDivElement>(null);
  const mapRef = useRef<unknown>(null);

  useEffect(() => {
    if (!ref.current || mapRef.current) return;
    let cancelled = false;
    (async () => {
      const L = (await import("leaflet")).default;
      if (cancelled || !ref.current) return;
      const map = L.map(ref.current, {
        center: [-15, -55],
        zoom: 4,
        zoomControl: false,
        attributionControl: true,
        worldCopyJump: true,
      });
      L.tileLayer(
        "https://services.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}",
        { attribution: "Esri | TomTom | USGS | FAO | NOAA", maxZoom: 13 },
      ).addTo(map);
      mapRef.current = map;
    })();
    return () => {
      cancelled = true;
      const m = mapRef.current as { remove?: () => void } | null;
      m?.remove?.();
      mapRef.current = null;
    };
  }, []);

  return <div ref={ref} className="absolute inset-0 h-full w-full" />;
}
