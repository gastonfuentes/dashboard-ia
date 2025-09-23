import { DashboardDataset } from "@/types/dashboard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface DashboardSidebarProps {
  datasets: DashboardDataset[];
  activePresentationId: string | null;
  onSelectPresentation: (presentationId: string) => void;
}

export function DashboardSidebar({
  datasets,
  activePresentationId,
  onSelectPresentation,
}: DashboardSidebarProps) {
  return (
    <div className="flex flex-1 flex-col gap-6">
      <div>
        <p className="text-xs font-medium uppercase text-muted-foreground">Presentaciones</p>
        <h1 className="text-lg font-semibold">Dashboard IA</h1>
      </div>
      <nav className="flex flex-col gap-2">
        {datasets.map((dataset) => {
          const isActive = dataset.presentationId === activePresentationId;
          return (
            <Button
              key={dataset.presentationId}
              variant={isActive ? "default" : "ghost"}
              size="sm"
              className="justify-between"
              onClick={() => onSelectPresentation(dataset.presentationId)}
            >
              <span className="flex flex-col items-start">
                <span className="text-sm font-medium">{dataset.presentationTitle}</span>
                <span className="text-xs text-muted-foreground">
                  {dataset.reportingPeriodStart} → {dataset.reportingPeriodEnd}
                </span>
              </span>
              {dataset.region ? <Badge variant="secondary">{dataset.region}</Badge> : null}
            </Button>
          );
        })}
      </nav>
    </div>
  );
}
