"use client";

import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { DashboardHeader } from "@/components/dashboard/header";
import { MetricsGrid } from "@/components/dashboard/metrics-grid";
import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { NpsOverview } from "@/components/dashboard/panels/nps-overview";
import { PipelineSummary } from "@/components/dashboard/panels/pipeline-summary";
import { useDashboardData } from "@/hooks/use-dashboard-data";

export default function Home() {
  const {
    datasets,
    activePresentationId,
    data,
    isLoading,
    error,
    setActivePresentationId,
    refresh,
  } = useDashboardData();

  return (
    <DashboardShell
      sidebar={
        <DashboardSidebar
          datasets={datasets}
          activePresentationId={activePresentationId}
          onSelectPresentation={setActivePresentationId}
        />
      }
      header={
        <DashboardHeader
          dataset={data}
          isLoading={isLoading}
          onRefresh={refresh}
        />
      }
    >
      <div className="flex flex-col gap-6">
        <div className="lg:hidden">
          <label
            className="mb-2 block text-xs font-medium text-muted-foreground"
            htmlFor="presentation-select"
          >
            Elegí una presentación
          </label>
          <select
            id="presentation-select"
            className="w-full rounded-md border bg-background px-3 py-2 text-sm"
            value={activePresentationId ?? ""}
            onChange={(event) => setActivePresentationId(event.target.value)}
          >
            {datasets.map((dataset) => (
              <option
                key={dataset.presentationId}
                value={dataset.presentationId}
              >
                {dataset.presentationTitle}
              </option>
            ))}
          </select>
        </div>

        {error ? (
          <div className="rounded-md border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
            {error}
          </div>
        ) : null}

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">
            Indicadores principales daleee
          </h3>
          <MetricsGrid metrics={data?.metrics ?? []} isLoading={isLoading} />
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          <PipelineSummary
            pipeline={data?.pipeline ?? []}
            isLoading={isLoading}
          />
          <NpsOverview nps={data?.nps ?? null} isLoading={isLoading} />
        </section>
      </div>
    </DashboardShell>
  );
}
