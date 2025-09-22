import { DashboardCollection } from "@/types/dashboard";

export const mockDashboardData: DashboardCollection = {
  datasets: [
    {
      presentationId: "conf-2024-q2",
      presentationTitle: "Conferencia Regional Q2 2024",
      periodType: "monthly",
      reportingPeriodStart: "2024-04-01",
      reportingPeriodEnd: "2024-04-30",
      businessUnit: "Ventas Empresariales",
      region: "Latam",
      productLine: "Suite Analytics",
      lastUpdatedAt: "2024-05-07T09:30:00Z",
      metrics: [
        {
          kpiId: "revenue_total",
          label: "Ingresos Totales",
          value: 1250000,
          currency: "USD",
          momGrowthPct: 0.12,
          target: { targetValue: 1300000 },
        },
        {
          kpiId: "gross_margin_pct",
          label: "Margen Bruto",
          value: 0.38,
          target: { targetPercentage: 0.4 },
        },
        {
          kpiId: "new_customers",
          label: "Clientes Nuevos",
          value: 240,
          breakdown: {
            channels: [
              { channel: "Directo", value: 120 },
              { channel: "Partner", value: 80 },
              { channel: "Online", value: 40 },
            ],
          },
        },
        {
          kpiId: "avg_ticket_value",
          label: "Ticket Promedio",
          value: 5200,
          currency: "USD",
          momGrowthPct: 0.06,
        },
        {
          kpiId: "customer_churn_pct",
          label: "Churn de Clientes",
          value: 0.045,
          target: { targetPercentage: 0.04 },
        },
        {
          kpiId: "pipeline_velocity",
          label: "Velocidad de Pipeline",
          value: 38,
          unit: "dias",
          breakdown: {
            segments: [
              { label: "Tier 1", value: 32 },
              { label: "Tier 2", value: 41 },
              { label: "Tier 3", value: 46 },
            ],
          },
        },
      ],
      pipeline: [
        { stage: "Prospect", dealsCount: 120, pipelineValue: 350000, conversionRatePct: 0.25 },
        { stage: "Demo", dealsCount: 60, pipelineValue: 200000, conversionRatePct: 0.45 },
        { stage: "Negociacion", dealsCount: 20, pipelineValue: 150000, conversionRatePct: 0.3 },
        { stage: "Cierre", dealsCount: 12, pipelineValue: 95000, conversionRatePct: 0.65 },
      ],
      nps: {
        score: 62,
        target: 70,
        sampleSize: 180,
        promotersPct: 0.58,
        detractorsPct: 0.21,
      },
    },
    {
      presentationId: "conf-2024-q1",
      presentationTitle: "Resultados Globales Q1 2024",
      periodType: "quarterly",
      reportingPeriodStart: "2024-01-01",
      reportingPeriodEnd: "2024-03-31",
      businessUnit: "Operaciones",
      region: "Global",
      productLine: "Plataforma IA",
      lastUpdatedAt: "2024-04-15T14:45:00Z",
      metrics: [
        {
          kpiId: "revenue_total",
          label: "Ingresos Totales",
          value: 3420000,
          currency: "USD",
          yoyGrowthPct: 0.18,
          target: { targetValue: 3300000 },
        },
        {
          kpiId: "gross_margin_pct",
          label: "Margen Bruto",
          value: 0.41,
          target: { targetPercentage: 0.4 },
        },
        {
          kpiId: "nps_score",
          label: "NPS",
          value: 68,
          target: { targetValue: 72 },
        },
        {
          kpiId: "avg_ticket_value",
          label: "Ticket Promedio",
          value: 4800,
          currency: "USD",
        },
        {
          kpiId: "operational_efficiency",
          label: "Eficiencia Operativa",
          value: 0.87,
          target: { targetPercentage: 0.85 },
        },
      ],
      pipeline: [
        { stage: "Identificado", dealsCount: 220, pipelineValue: 780000, conversionRatePct: 0.18 },
        { stage: "Calificado", dealsCount: 140, pipelineValue: 620000, conversionRatePct: 0.32 },
        { stage: "En Propuesta", dealsCount: 55, pipelineValue: 410000, conversionRatePct: 0.27 },
        { stage: "Cierre", dealsCount: 25, pipelineValue: 185000, conversionRatePct: 0.7 },
      ],
      nps: {
        score: 68,
        target: 72,
        sampleSize: 420,
        promotersPct: 0.63,
        detractorsPct: 0.18,
      },
    },
  ],
};
