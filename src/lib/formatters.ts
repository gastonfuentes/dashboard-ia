const numberFormatter = new Intl.NumberFormat("es-AR", {
  maximumFractionDigits: 0,
});

const percentFormatter = new Intl.NumberFormat("es-AR", {
  style: "percent",
  maximumFractionDigits: 1,
});

export function formatCurrency(value: number, currency = "USD") {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency,
    maximumFractionDigits: value < 100 ? 2 : 0,
  }).format(value);
}

export function formatNumber(value: number) {
  return numberFormatter.format(value);
}

export function formatPercentage(value: number) {
  return percentFormatter.format(value);
}

export function formatMetricValue(value: number, options?: { currency?: string; unit?: string }) {
  if (options?.currency) {
    return formatCurrency(value, options.currency);
  }

  if (options?.unit) {
    return `${numberFormatter.format(value)} ${options.unit}`;
  }

  if (value >= 1 || value <= -1) {
    return numberFormatter.format(value);
  }

  return formatPercentage(value);
}
