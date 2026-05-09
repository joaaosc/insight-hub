export function LegendBar() {
  const items = [
    { c: "var(--color-chart-1)", l: "Energia" },
    { c: "var(--color-chart-2)", l: "Indústria" },
    { c: "var(--color-chart-3)", l: "Transporte" },
    { c: "var(--color-chart-4)", l: "Edificações" },
    { c: "var(--color-chart-5)", l: "Resíduos" },
    { c: "var(--color-chart-6)", l: "AFOLU" },
  ];
  return (
    <div className="absolute bottom-5 left-1/2 z-[800] flex -translate-x-1/2 items-center gap-5 rounded-full border border-border bg-panel/90 px-5 py-2.5 text-xs backdrop-blur">
      {items.map((i) => (
        <div key={i.l} className="flex items-center gap-1.5">
          <span
            className="inline-block h-2.5 w-2.5 rounded-sm"
            style={{ backgroundColor: i.c }}
          />
          <span className="text-muted-foreground">{i.l}</span>
        </div>
      ))}
    </div>
  );
}
