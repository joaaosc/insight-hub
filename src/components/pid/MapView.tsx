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

      // Basemap — Esri World Terrain
      L.tileLayer(
        "https://services.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}",
        { attribution: "Esri | TomTom | USGS | FAO | NOAA | IBGE", maxZoom: 13 },
      ).addTo(map);

      mapRef.current = map;

      // Brazilian state boundaries (always visible)
      const statesUrl =
        "https://servicodados.ibge.gov.br/api/v3/malhas/paises/BR?formato=application/vnd.geo+json&qualidade=intermediaria&intrarregiao=UF";
      fetch(statesUrl)
        .then((r) => r.json())
        .then((geo) => {
          if (cancelled) return;
          L.geoJSON(geo, {
            style: {
              color: "#5a5a5a",
              weight: 1,
              fill: false,
              opacity: 0.85,
            },
            interactive: false,
          }).addTo(map);
        })
        .catch(() => {});

      // Municipality boundaries — load once, toggle visibility by zoom
      let muniLayer: L.GeoJSON | null = null;
      let muniLoading = false;
      const ensureMuniLayer = () => {
        if (muniLayer || muniLoading) return;
        muniLoading = true;
        fetch(
          "https://servicodados.ibge.gov.br/api/v3/malhas/paises/BR?formato=application/vnd.geo+json&qualidade=baixa&intrarregiao=municipio",
        )
          .then((r) => r.json())
          .then((geo) => {
            if (cancelled) return;
            muniLayer = L.geoJSON(geo, {
              style: {
                color: "#8a8a8a",
                weight: 0.5,
                fill: false,
                opacity: 0.7,
              },
              interactive: false,
            });
            if (map.getZoom() >= 6) muniLayer.addTo(map);
          })
          .catch(() => {})
          .finally(() => {
            muniLoading = false;
          });
      };

      const updateMuni = () => {
        const z = map.getZoom();
        if (z >= 6) {
          ensureMuniLayer();
          if (muniLayer && !map.hasLayer(muniLayer)) muniLayer.addTo(map);
        } else if (muniLayer && map.hasLayer(muniLayer)) {
          map.removeLayer(muniLayer);
        }
      };
      map.on("zoomend", updateMuni);
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
