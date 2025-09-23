import { DashboardDataset } from "@/types/dashboard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface DashboardHeaderProps {
  dataset: DashboardDataset | null;
  isLoading: boolean;
  onRefresh: () => void;
}

const dateFormatter = new Intl.DateTimeFormat("es-AR", {
  dateStyle: "medium",
  timeStyle: "short",
});

export function DashboardHeader({ dataset, isLoading, onRefresh }: DashboardHeaderProps) {
  return (
    <div className="flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-col">
        <h2 className="text-2xl font-semibold leading-tight">
          {dataset?.presentationTitle ?? "Seleccioná una presentación"}
        </h2>
        {dataset ? (
          <p className="text-sm text-muted-foreground">
            {dataset.businessUnit ? `${dataset.businessUnit} · ` : ""}
            Periodo: {dataset.reportingPeriodStart} → {dataset.reportingPeriodEnd}
          </p>
        ) : null}
      </div>
      <div className="flex items-center gap-3">
        {dataset ? (
          <span className="text-xs text-muted-foreground">
            Actualizado {dateFormatter.format(new Date(dataset.lastUpdatedAt))}
          </span>
        ) : null}
        <Separator orientation="vertical" className="hidden h-6 md:block" />
        <Button onClick={onRefresh} disabled={isLoading} variant="outline">
          {isLoading ? "Actualizando..." : "Actualizar"}
        </Button>
      </div>
    </div>
  );
}
