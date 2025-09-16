
export interface MetricCard {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative';
  icon: React.ReactNode;
}

export interface SalesData {
  date: string;
  sales: number;
  orders: number;
  revenue: number;
}

export interface CategoryData {
  name: string;
  value: number;
  color: string;
}

export interface UserData {
  month: string;
  newUsers: number;
  activeUsers: number;
  retention: number;
}

export interface GeographicData {
  country: string;
  users: number;
  revenue: number;
}

// UI Component Props
export interface MetricCardProps {
  metric: MetricCard;
}

export interface ChartContainerProps {
  title: string;
  badge?: string;
  badgeColor?: string;
  children: React.ReactNode;
}

// Hook Types
export interface DashboardData {
  salesData: SalesData[];
  categoryData: CategoryData[];
  userData: UserData[];
  geoData: GeographicData[];
  isLoading: boolean;
  refreshData: () => void;
}

export interface ThemeState {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export interface ExportPayload {
  timeRange: TimeRange;
  metrics: Omit<MetricCard, 'icon'>[];
  salesData: SalesData[];
  categoryData: CategoryData[];
  userData: UserData[];
  geoData: GeographicData[];
  summary: {
    totalRevenue: number;
    totalOrders: number;
    totalUsers: number;
  };
}

export interface ExportState {
  showExportSuccess: boolean;
  exportData: (data: ExportPayload) => void;
}

// Chart Props
export interface PieLabelProps {
  name?: string;
  value?: number | string;
  percent?: number;
  cx?: number;
  cy?: number;
  midAngle?: number;
  innerRadius?: number;
  outerRadius?: number;
  index?: number;
}

// Time Range
export type TimeRange = '7d' | '30d' | '90d';