import { Search, Home, Plus, Minus, ChevronsLeft, Navigation } from "lucide-react";

export function LeftMapTools() {
  return (
    <div className="absolute left-4 top-[96px] z-[900] flex flex-col items-center gap-3">
      <ToolButton><Search className="h-[18px] w-[18px]" /></ToolButton>
      <ToolButton><Home className="h-[18px] w-[18px]" /></ToolButton>
      <ToolButton><Plus className="h-[18px] w-[18px]" /></ToolButton>
      <ToolButton><Minus className="h-[18px] w-[18px]" /></ToolButton>
      <ToolButton><ChevronsLeft className="h-[18px] w-[18px]" /></ToolButton>
      <div className="h-2" />
      <ToolButton><Navigation className="h-[18px] w-[18px]" /></ToolButton>
    </div>
  );
}

function ToolButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="flex h-9 w-9 items-center justify-center text-foreground/80 transition hover:text-brand">
      {children}
    </button>
  );
}

import { Map as MapIcon, Layers, List, Ruler, PencilLine, Save } from "lucide-react";

export function BottomMapTools() {
  const items = [
    { icon: <MapIcon className="h-5 w-5" />, label: "Mapas Base" },
    { icon: <Layers className="h-5 w-5" />, label: "Camadas", badge: 9 },
    { icon: <List className="h-5 w-5" />, label: "Legenda" },
    { icon: <Ruler className="h-5 w-5" />, label: "Medir" },
    { icon: <PencilLine className="h-5 w-5" />, label: "Esboço" },
    { icon: <Save className="h-5 w-5" />, label: "Salvar" },
  ];
  return (
    <div className="absolute bottom-8 left-1/2 z-[900] flex -translate-x-1/2 items-end gap-1 rounded-md bg-white px-2 py-2 shadow-[0_2px_10px_rgba(0,0,0,0.18)]">
      {items.map((it) => (
        <button
          key={it.label}
          className="relative flex w-[78px] flex-col items-center gap-1 rounded px-2 py-1.5 text-[13px] text-foreground/85 transition hover:bg-secondary"
        >
          <div className="relative">
            {it.icon}
            {it.badge !== undefined && (
              <span className="absolute -right-2 -top-2 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#e0effb] px-1 text-[11px] font-semibold text-[#1a73e8]">
                {it.badge}
              </span>
            )}
          </div>
          <span>{it.label}</span>
        </button>
      ))}
    </div>
  );
}
