import { Skeleton } from "@/components/ui/skeleton";
import { DashboardMetric } from "@/types/dashboard";
import { MetricCard } from "./metric-card";

interface MetricsGridProps {
  metrics: DashboardMetric[];
  isLoading: boolean;
}

export function MetricsGrid({ metrics, isLoading }: MetricsGridProps) {
  if (isLoading) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton key={index} className="h-36 w-full rounded-xl" />
        ))}
      </div>
    );
  }

  if (!metrics.length) {
    return (
      <div className="rounded-lg border border-dashed p-8 text-center text-sm text-muted-foreground">
        No hay métricas para mostrar en este período.
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {metrics.map((metric) => (
        <MetricCard key={metric.kpiId} metric={metric} />
      ))}
    </div>
  );
}
