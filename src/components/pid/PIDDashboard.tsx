import { TopBar } from "./TopBar";
import { MapView } from "./MapView";
import { LeftMapTools, BottomMapTools } from "./MapToolbar";

export function PIDDashboard() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-background text-foreground">
      <MapView />
      <TopBar />
      <LeftMapTools />
      <BottomMapTools />
    </div>
  );
}
