import { HelpCircle, Download, User, ChevronDown, Pencil } from "lucide-react";

export function TopBar() {
  return (
    <header className="absolute inset-x-0 top-0 z-[1000] flex h-16 items-center justify-between border-b border-border bg-panel/95 px-5 backdrop-blur">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-brand">
            <span className="font-display text-sm font-bold text-brand-foreground">PID</span>
            <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-primary ring-2 ring-panel" />
          </div>
          <div className="hidden flex-col leading-tight md:flex">
            <span className="font-display text-base font-bold tracking-tight">PID</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Plataforma Interativa de Descarbonização
            </span>
          </div>
        </div>
        <div className="hidden h-8 w-px bg-border md:block" />
        <div className="hidden items-center gap-2 text-sm md:flex">
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Projeto:
          </span>
          <span className="font-medium">Cenário sem título</span>
          <button className="rounded p-1 text-muted-foreground transition hover:bg-secondary hover:text-foreground">
            <Pencil className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 text-sm md:flex">
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Status da sessão:
        </span>
        <span className="flex items-center gap-1.5 font-medium text-primary">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Aguardando execução do modelo
        </span>
      </div>

      <div className="flex items-center gap-2">
        <button className="flex items-center gap-1.5 rounded-md px-3 py-2 text-sm text-muted-foreground transition hover:bg-secondary hover:text-foreground">
          <HelpCircle className="h-4 w-4" />
          <span className="hidden sm:inline">Ajuda</span>
        </button>
        <button className="flex items-center gap-1.5 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground transition hover:brightness-110">
          <Download className="h-4 w-4" />
          <span className="hidden sm:inline">Exportar</span>
        </button>
        <button className="flex items-center gap-1.5 rounded-md border border-border bg-secondary px-3 py-2 text-sm transition hover:bg-card">
          <User className="h-4 w-4" />
          <span className="hidden sm:inline">Conta</span>
          <ChevronDown className="h-3 w-3 opacity-60" />
        </button>
      </div>
    </header>
  );
}
