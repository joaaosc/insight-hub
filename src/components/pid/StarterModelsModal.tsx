import { X } from "lucide-react";
import type { Sector } from "./PIDDashboard";

export function StarterModelsModal({
  sectors,
  onClose,
  onSelect,
}: {
  sectors: Sector[];
  onClose: () => void;
  onSelect: (s: Sector) => void;
}) {
  return (
    <div className="fixed inset-0 z-[1100] flex items-center justify-center p-6">
      <div
        className="absolute inset-0 bg-background/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-5xl rounded-xl border border-border bg-panel shadow-2xl">
        <div className="flex items-center justify-between border-b border-border px-7 py-5">
          <h2 className="font-display text-xl font-semibold">Modelos Iniciais</h2>
          <button
            onClick={onClose}
            className="rounded p-1.5 text-muted-foreground transition hover:bg-secondary hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="grid gap-5 p-7 md:grid-cols-2">
          {sectors.map((s) => (
            <button
              key={s.id}
              onClick={() => onSelect(s)}
              className="group rounded-lg border border-border bg-card p-6 text-left transition hover:border-primary/60 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="mb-5 flex h-32 items-end gap-1.5 border-b border-border/60 pb-2">
                {s.bars.map((b, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-sm transition group-hover:opacity-90"
                    style={{ height: `${b.height}%`, backgroundColor: b.color }}
                    title={b.label}
                  />
                ))}
              </div>
              <div className="font-display text-base font-semibold">{s.name}</div>
              <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                {s.region}
              </div>

              <dl className="mt-5 space-y-2.5 text-sm">
                <Row label="Fonte de Dados" value={s.source} />
                <Row label="Resolução" value={s.resolution} />
                <Row label="Score Global F1" value={s.score} />
                <Row label="Origem dos Rótulos" value={s.labelSource} />
              </dl>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </dt>
      <dd className="text-right text-sm">{value}</dd>
    </div>
  );
}
