import { createFileRoute } from "@tanstack/react-router";
import { PIDDashboard } from "@/components/pid/PIDDashboard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PID — Plataforma Interativa de Descarbonização" },
      {
        name: "description",
        content:
          "Visualize, modele e refine cenários de descarbonização da infraestrutura e indústrias brasileiras em um dashboard espacial interativo.",
      },
      { property: "og:title", content: "PID — Plataforma Interativa de Descarbonização" },
      {
        property: "og:description",
        content: "Dashboard espacial para modelagem de cenários de descarbonização.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return <PIDDashboard />;
}
