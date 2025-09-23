import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatMetricValue, formatPercentage } from "@/lib/formatters";
import { DashboardMetric } from "@/types/dashboard";

interface MetricCardProps {
  metric: DashboardMetric;
}

function getTrendLabel(metric: DashboardMetric) {
  if (typeof metric.momGrowthPct === "number") {
    return {
      label: "vs. mes anterior",
      value: formatPercentage(metric.momGrowthPct),
      tone: metric.momGrowthPct >= 0 ? "text-emerald-600" : "text-red-600",
    };
  }

  if (typeof metric.yoyGrowthPct === "number") {
    return {
      label: "vs. año anterior",
      value: formatPercentage(metric.yoyGrowthPct),
      tone: metric.yoyGrowthPct >= 0 ? "text-emerald-600" : "text-red-600",
    };
  }

  return null;
}

function getTargetLabel(metric: DashboardMetric) {
  if (metric.target?.targetValue !== undefined) {
    return `Meta ${formatMetricValue(metric.target.targetValue, {
      currency: metric.currency,
      unit: metric.unit,
    })}`;
  }

  if (metric.target?.targetPercentage !== undefined) {
    return `Meta ${formatPercentage(metric.target.targetPercentage)}`;
  }

  return null;
}

export function MetricCard({ metric }: MetricCardProps) {
  const trend = getTrendLabel(metric);
  const targetLabel = getTargetLabel(metric);

  return (
    <Card>
      <CardHeader className="space-y-1 pb-2">
        <CardTitle className="text-base font-medium text-muted-foreground">
          {metric.label}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <span className="text-3xl font-semibold">
          {formatMetricValue(metric.value, { currency: metric.currency, unit: metric.unit })}
        </span>
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          {trend ? (
            <span className={`font-medium ${trend.tone}`}>
              {trend.value} <span className="font-normal text-muted-foreground">{trend.label}</span>
            </span>
          ) : null}
          {targetLabel ? <span>{targetLabel}</span> : null}
        </div>
      </CardContent>
    </Card>
  );
}
