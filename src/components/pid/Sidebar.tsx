import { useState } from "react";
import { Pencil, ArrowLeftRight, Play, RotateCcw, Undo2 } from "lucide-react";
import type { Sector } from "./PIDDashboard";

type Tab = "retrain" | "refine" | "layers";

export function Sidebar({
  selectedSector,
  onOpenModels,
}: {
  selectedSector: Sector | null;
  onOpenModels: () => void;
}) {
  const [tab, setTab] = useState<Tab>("retrain");

  return (
    <aside className="absolute bottom-0 left-0 top-16 z-[900] flex w-[320px] flex-col border-r border-border bg-panel/95 backdrop-blur">
      <div className="flex-1 overflow-y-auto px-5 py-5">
        <Field label="Área Selecionada">
          <div className="flex items-start justify-between gap-2">
            <div>
              <div className="font-display text-lg font-semibold">Vale do Aço — MG</div>
              <div className="mt-0.5 text-xs text-muted-foreground">2.847 KM²</div>
            </div>
            <button className="rounded p-1 text-muted-foreground transition hover:bg-secondary hover:text-foreground">
              <Pencil className="h-3.5 w-3.5" />
            </button>
          </div>
        </Field>

        <Field label="Modelo Selecionado">
          <button
            onClick={onOpenModels}
            className="flex w-full items-center justify-between text-left transition hover:text-primary"
          >
            <span className="font-medium">
              {selectedSector ? selectedSector.name : "Selecionar Modelo"}
            </span>
            <ArrowLeftRight className="h-4 w-4 text-muted-foreground" />
          </button>
        </Field>

        <Field label="Checkpoint">
          <div className="flex items-center justify-between gap-2">
            <span className="text-sm text-muted-foreground">
              Execute o modelo para criar o primeiro checkpoint
            </span>
            <ArrowLeftRight className="h-4 w-4 shrink-0 text-muted-foreground" />
          </div>
        </Field>

        <div className="mt-6 flex gap-5 border-b border-border text-[11px] font-semibold uppercase tracking-[0.14em]">
          <TabBtn active={tab === "retrain"} onClick={() => setTab("retrain")}>
            Retreinar
          </TabBtn>
          <TabBtn active={tab === "refine"} onClick={() => setTab("refine")}>
            Refinar Resultados
          </TabBtn>
          <TabBtn active={tab === "layers"} onClick={() => setTab("layers")}>
            Camadas
          </TabBtn>
        </div>

        <div className="mt-5 text-sm leading-relaxed text-muted-foreground">
          {tab === "retrain" &&
            'Clique em "Executar modelo" para gerar o mapa de classes de descarbonização da sua área de interesse.'}
          {tab === "refine" &&
            "Adicione anotações sobre os resultados para refinar o modelo nas próximas execuções."}
          {tab === "layers" &&
            "Ative ou desative camadas de infraestrutura, indústrias, transmissão e cobertura do solo."}
        </div>
      </div>

      <div className="border-t border-border px-5 py-3">
        <div className="mb-3 flex items-center justify-between text-sm text-muted-foreground">
          <button className="flex items-center gap-1.5 transition hover:text-foreground">
            <RotateCcw className="h-3.5 w-3.5" /> Limpar
          </button>
          <button className="flex items-center gap-1.5 transition hover:text-foreground">
            <Undo2 className="h-3.5 w-3.5" /> Desfazer
          </button>
        </div>
        <button className="flex w-full items-center justify-center gap-2 rounded-md bg-primary py-3 font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:brightness-110">
          <Play className="h-4 w-4 fill-current" />
          Executar modelo
        </button>
      </div>
    </aside>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <div className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </div>
      {children}
    </div>
  );
}

function TabBtn({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`-mb-px border-b-2 pb-2 transition ${
        active
          ? "border-primary text-foreground"
          : "border-transparent text-muted-foreground hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}
