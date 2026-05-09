import { useState } from "react";

const NAV = ["Início", "Infraestrutura", "Indústrias", "PID", "Saiba mais"] as const;

export function TopBar() {
  const [active, setActive] = useState<(typeof NAV)[number]>("PID");
  const [lang, setLang] = useState<"PT" | "EN">("PT");

  return (
    <header className="absolute inset-x-0 top-0 z-[1000] flex h-20 items-center justify-between bg-panel px-6 shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <div className="relative flex h-14 items-center gap-3 rounded-full bg-brand-foreground pr-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand">
            <svg viewBox="0 0 32 32" className="h-7 w-7 text-brand-foreground" fill="currentColor">
              <circle cx="9" cy="9" r="3.5" />
              <circle cx="22" cy="11" r="2.5" />
              <circle cx="11" cy="22" r="2.5" />
              <path d="M9 12.5 L11 19.5 M11.5 11 L19.5 11" stroke="currentColor" strokeWidth="1.8" />
            </svg>
          </div>
          <div className="flex flex-col text-[12px] font-semibold leading-tight text-panel">
            <span>plataforma</span>
            <span>interativa de</span>
            <span>descarbonização</span>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex items-center gap-10">
        {NAV.map((item) => {
          const isActive = item === active;
          return (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`font-display text-[22px] tracking-tight transition ${
                isActive ? "text-brand" : "text-panel-foreground/85 hover:text-panel-foreground"
              }`}
            >
              {item}
            </button>
          );
        })}
      </nav>

      {/* Language toggle */}
      <div className="flex h-9 items-center rounded-full bg-secondary p-1">
        <button
          onClick={() => setLang("PT")}
          className={`flex h-7 w-9 items-center justify-center rounded-full text-xs font-bold transition ${
            lang === "PT" ? "bg-brand text-brand-foreground" : "text-muted-foreground"
          }`}
        >
          PT
        </button>
        <button
          onClick={() => setLang("EN")}
          className={`flex h-7 w-9 items-center justify-center rounded-full text-xs font-bold transition ${
            lang === "EN" ? "bg-brand text-brand-foreground" : "text-muted-foreground"
          }`}
        >
          EN
        </button>
      </div>
    </header>
  );
}
