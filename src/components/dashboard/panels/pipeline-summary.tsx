import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency, formatNumber, formatPercentage } from "@/lib/formatters";
import { PipelineStage } from "@/types/dashboard";

interface PipelineSummaryProps {
  pipeline: PipelineStage[];
  isLoading: boolean;
}

export function PipelineSummary({ pipeline, isLoading }: PipelineSummaryProps) {
  const totalValue = pipeline.reduce((acc, stage) => acc + stage.pipelineValue, 0);

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold">Pipeline Comercial</CardTitle>
        <p className="text-sm text-muted-foreground">
          Visión rápida de las oportunidades activas por etapa.
        </p>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {isLoading ? (
          <div className="space-y-2 text-sm text-muted-foreground">Cargando pipeline...</div>
        ) : (
          <>
            <div className="text-2xl font-semibold">{formatCurrency(totalValue)}</div>
            <ul className="space-y-3 text-sm">
              {pipeline.map((stage) => (
                <li key={stage.stage} className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-medium">{stage.stage}</p>
                    <p className="text-xs text-muted-foreground">
                      {formatNumber(stage.dealsCount)} oportunidades · {formatCurrency(stage.pipelineValue)}
                    </p>
                  </div>
                  {stage.conversionRatePct !== undefined ? (
                    <span className="text-xs font-medium text-muted-foreground">
                      {formatPercentage(stage.conversionRatePct)}
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          </>
        )}
      </CardContent>
    </Card>
  );
}
