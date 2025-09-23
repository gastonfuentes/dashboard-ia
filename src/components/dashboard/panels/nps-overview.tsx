import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatPercentage } from "@/lib/formatters";
import { NpsSnapshot } from "@/types/dashboard";

interface NpsOverviewProps {
  nps: NpsSnapshot | null;
  isLoading: boolean;
}

export function NpsOverview({ nps, isLoading }: NpsOverviewProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold">Satisfacción del Cliente (NPS)</CardTitle>
        <p className="text-sm text-muted-foreground">
          Pulso de la experiencia del cliente y gap contra la meta.
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {isLoading ? (
          <div className="space-y-2 text-sm text-muted-foreground">Cargando NPS...</div>
        ) : nps ? (
          <>
            <div className="text-3xl font-semibold">{nps.score}</div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span>Meta {nps.target}</span>
              <span>Muestra: {nps.sampleSize}</span>
              {nps.promotersPct !== undefined ? (
                <span>Promotores {formatPercentage(nps.promotersPct)}</span>
              ) : null}
              {nps.detractorsPct !== undefined ? (
                <span>Detractores {formatPercentage(nps.detractorsPct)}</span>
              ) : null}
            </div>
          </>
        ) : (
          <p className="text-sm text-muted-foreground">Sin datos de NPS para esta presentación.</p>
        )}
      </CardContent>
    </Card>
  );
}
