import { useState } from "react";

const NAV = ["Início", "Infraestrutura", "Indústrias", "PID", "Saiba mais"] as const;
type NavItem = (typeof NAV)[number];

export function TopBar() {
  const [active, setActive] = useState<NavItem>("PID");
  const [lang, setLang] = useState<"PT" | "EN">("PT");

  return (
    <header className="absolute inset-x-0 top-0 z-[1000] flex h-[78px] items-center px-4">
      {/* Logo pill */}
      <div className="flex items-center gap-3">
        <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-brand">
          <PidGlyph className="h-7 w-7 text-white" />
        </div>
        <div className="text-[13px] font-semibold leading-[1.15] text-foreground">
          <div>plataforma</div>
          <div>interativa de</div>
          <div>descarbonização</div>
        </div>
      </div>

      {/* Nav */}
      <nav className="ml-auto flex items-center gap-12 pr-10">
        {NAV.map((item) => {
          const isActive = item === active;
          return (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`relative text-[20px] font-normal tracking-tight transition ${
                isActive ? "font-semibold text-brand" : "text-foreground/85 hover:text-foreground"
              }`}
            >
              {item}
            </button>
          );
        })}
      </nav>

      {/* Language toggle */}
      <div className="flex h-9 items-center overflow-hidden rounded-full border border-brand">
        <button
          onClick={() => setLang("PT")}
          className={`flex h-full w-10 items-center justify-center text-[13px] font-semibold transition ${
            lang === "PT" ? "bg-brand text-white" : "bg-white text-brand"
          }`}
        >
          PT
        </button>
        <button
          onClick={() => setLang("EN")}
          className={`flex h-full w-10 items-center justify-center text-[13px] font-semibold transition ${
            lang === "EN" ? "bg-brand text-white" : "bg-white text-brand"
          }`}
        >
          EN
        </button>
      </div>
    </header>
  );
}

function PidGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      <circle cx="9" cy="9" r="2.6" fill="currentColor" stroke="none" />
      <circle cx="22" cy="11" r="2" fill="currentColor" stroke="none" />
      <circle cx="11" cy="22" r="2" fill="currentColor" stroke="none" />
      <path d="M10.5 11 L20 11" />
      <path d="M9.5 11.5 L10.7 20" />
    </svg>
  );
}
