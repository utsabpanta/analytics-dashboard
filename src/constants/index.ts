import type { TimeRange } from '../types';

export const TIME_RANGES: { value: TimeRange; label: string }[] = [
  { value: '7d', label: 'Last 7 days' },
  { value: '30d', label: 'Last 30 days' },
  { value: '90d', label: 'Last 90 days' },
];

export const CHART_COLORS = {
  primary: '#3b82f6',
  secondary: '#10b981',
  warning: '#f59e0b',
  danger: '#ef4444',
  purple: '#8b5cf6',
} as const;

export const CHART_CONFIG = {
  defaultHeight: 300,
  largeHeight: 400,
  strokeWidth: 2,
  strokeDashArray: '3 3',
} as const;