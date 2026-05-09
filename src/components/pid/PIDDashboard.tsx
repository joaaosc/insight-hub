import { useState } from "react";
import { TopBar } from "./TopBar";
import { Sidebar } from "./Sidebar";
import { MapView } from "./MapView";
import { StarterModelsModal } from "./StarterModelsModal";
import { LegendBar } from "./LegendBar";

export type Sector = {
  id: string;
  name: string;
  region: string;
  source: string;
  resolution: string;
  score: string;
  labelSource: string;
  bars: { color: string; height: number; label: string }[];
};

const SECTORS: Sector[] = [
  {
    id: "industria-4",
    name: "Indústria Pesada — 4 Setores",
    region: "SP, MG, RJ, ES, BA",
    source: "PID 2020, 2021, 2022, 2023",
    resolution: "1 km",
    score: "0.89",
    labelSource: "MCTI / Observatório do Clima",
    bars: [
      { color: "var(--color-chart-1)", height: 35, label: "Cimento" },
      { color: "var(--color-chart-2)", height: 70, label: "Aço" },
      { color: "var(--color-chart-3)", height: 90, label: "Química" },
      { color: "var(--color-chart-4)", height: 55, label: "Refino" },
    ],
  },
  {
    id: "energia-9",
    name: "Energia & Transporte — 9 Setores",
    region: "Brasil — todas as regiões",
    source: "PID 2020, 2021, 2022, 2023",
    resolution: "1 km",
    score: "0.84",
    labelSource: "EPE / MME",
    bars: [
      { color: "var(--color-chart-1)", height: 25, label: "Geração" },
      { color: "var(--color-chart-2)", height: 60, label: "T&D" },
      { color: "var(--color-chart-3)", height: 85, label: "Rodov." },
      { color: "var(--color-chart-2)", height: 45, label: "Ferrov." },
      { color: "var(--color-chart-4)", height: 30, label: "Aéreo" },
      { color: "var(--color-chart-5)", height: 70, label: "Marít." },
      { color: "var(--color-chart-6)", height: 20, label: "Bio." },
      { color: "var(--color-chart-4)", height: 50, label: "Solar" },
      { color: "var(--color-chart-5)", height: 65, label: "Eólica" },
    ],
  },
];

export function PIDDashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const [, setSelectedSector] = useState<Sector | null>(null);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-background text-foreground">
      <MapView />
      <TopBar />
      <LegendBar />
      {modalOpen && (
        <StarterModelsModal
          sectors={SECTORS}
          onClose={() => setModalOpen(false)}
          onSelect={(s) => {
            setSelectedSector(s);
            setModalOpen(false);
          }}
        />
      )}
    </div>
  );
}
