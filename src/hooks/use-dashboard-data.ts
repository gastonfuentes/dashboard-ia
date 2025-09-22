import { useEffect, useMemo, useState } from "react";

import { mockDashboardData } from "@/data/mock-dashboard";
import { DashboardDataset } from "@/types/dashboard";

const SIMULATED_LATENCY_MS = 300;

export interface UseDashboardDataResult {
  datasets: DashboardDataset[];
  activePresentationId: string | null;
  data: DashboardDataset | null;
  isLoading: boolean;
  error: string | null;
  setActivePresentationId: (presentationId: string) => void;
  refresh: () => void;
}

/**
 * Provides dashboard datasets from mock data while mimicking an async fetch.
 */
export function useDashboardData(initialPresentationId?: string): UseDashboardDataResult {
  const datasets = useMemo(() => mockDashboardData.datasets, []);

  const [activePresentationId, setActivePresentationId] = useState<string | null>(
    () => initialPresentationId ?? datasets[0]?.presentationId ?? null,
  );
  const [data, setData] = useState<DashboardDataset | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState(0);

  useEffect(() => {
    setIsLoading(true);

    const timeoutId = window.setTimeout(() => {
      if (!activePresentationId) {
        setData(null);
        setError("No presentation selected");
        setIsLoading(false);
        return;
      }

      const nextDataset = datasets.find((item) => item.presentationId === activePresentationId) ?? null;

      if (!nextDataset) {
        setData(null);
        setError("Dataset not found");
      } else {
        setData(nextDataset);
        setError(null);
      }

      setIsLoading(false);
    }, SIMULATED_LATENCY_MS);

    return () => window.clearTimeout(timeoutId);
  }, [activePresentationId, datasets, refreshToken]);

  const refresh = () => setRefreshToken((token) => token + 1);

  return {
    datasets,
    activePresentationId,
    data,
    isLoading,
    error,
    setActivePresentationId,
    refresh,
  };
}
