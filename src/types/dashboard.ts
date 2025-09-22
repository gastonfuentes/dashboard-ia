export type PeriodType = "weekly" | "monthly" | "quarterly" | "yearly";

export type ChannelBreakdown = {
  channel: string;
  value: number;
};

export type GenericBreakdown = {
  label: string;
  value: number;
};

export interface MetricTarget {
  targetValue?: number;
  targetPercentage?: number;
}

export interface DashboardMetric {
  kpiId: string;
  label: string;
  value: number;
  currency?: string;
  unit?: string;
  momGrowthPct?: number;
  yoyGrowthPct?: number;
  target?: MetricTarget;
  breakdown?: {
    channels?: ChannelBreakdown[];
    segments?: GenericBreakdown[];
  };
}

export interface PipelineStage {
  stage: string;
  dealsCount: number;
  pipelineValue: number;
  conversionRatePct?: number;
}

export interface NpsSnapshot {
  score: number;
  target: number;
  sampleSize: number;
  promotersPct?: number;
  detractorsPct?: number;
}

export interface DashboardDataset {
  presentationId: string;
  presentationTitle: string;
  periodType: PeriodType;
  reportingPeriodStart: string;
  reportingPeriodEnd: string;
  businessUnit?: string;
  region?: string;
  productLine?: string;
  lastUpdatedAt: string;
  metrics: DashboardMetric[];
  pipeline: PipelineStage[];
  nps: NpsSnapshot;
}

export interface DashboardCollection {
  datasets: DashboardDataset[];
}
