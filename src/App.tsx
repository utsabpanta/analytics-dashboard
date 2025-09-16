import React, { useState } from 'react';
import { DollarSign, TrendingUp, Users, Eye } from 'lucide-react';
import { useTheme } from './hooks/useTheme';
import { useDashboardData } from './hooks/useDashboardData';
import { useExport } from './hooks/useExport';
import { Header } from './components/layout/Header';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { MetricCard } from './components/ui/MetricCard';
import { ExportSuccessToast } from './components/ui/ExportSuccessToast';
import { SalesTrendChart } from './components/charts/SalesTrendChart';
import { CategoryDistributionChart } from './components/charts/CategoryDistributionChart';
import { RevenueOrdersChart } from './components/charts/RevenueOrdersChart';
import { UserGrowthChart } from './components/charts/UserGrowthChart';
import { GeographicDataList } from './components/charts/GeographicDataList';
import type { TimeRange, MetricCard as MetricCardType } from './types';

const Dashboard: React.FC = () => {
  const [timeRange, setTimeRange] = useState<TimeRange>('30d');

  // Custom hooks
  const { isDarkMode, toggleDarkMode } = useTheme();
  const { salesData, categoryData, userData, geoData, isLoading, refreshData } = useDashboardData(timeRange);
  const { showExportSuccess, exportData } = useExport();

  // Calculate metrics from data
  const totalRevenue = salesData.reduce((sum, item) => sum + item.revenue, 0);
  const totalOrders = salesData.reduce((sum, item) => sum + item.orders, 0);
  const avgOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0;
  const totalUsers = geoData.reduce((sum, item) => sum + item.users, 0);

  const metrics: MetricCardType[] = [
    {
      title: 'Total Revenue',
      value: `$${(totalRevenue / 1000000).toFixed(1)}M`,
      change: '+12.5%',
      changeType: 'positive',
      icon: <DollarSign className="w-6 h-6" />,
    },
    {
      title: 'Total Orders',
      value: totalOrders.toLocaleString(),
      change: '+8.2%',
      changeType: 'positive',
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: 'Active Users',
      value: totalUsers.toLocaleString(),
      change: '-2.1%',
      changeType: 'negative',
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: 'Avg Order Value',
      value: `$${avgOrderValue.toFixed(0)}`,
      change: '+15.8%',
      changeType: 'positive',
      icon: <Eye className="w-6 h-6" />,
    },
  ];

  const handleExportData = () => {
    const exportPayload = {
      timeRange,
      metrics: metrics.map(({ icon, ...metric }) => {
        void icon; // Acknowledge icon exists but don't use it
        return metric;
      }),
      salesData,
      categoryData,
      userData,
      geoData,
      summary: { totalRevenue, totalOrders, totalUsers }
    };
    exportData(exportPayload);
  };

  // Loading state
  if (isLoading) {
    return <LoadingSpinner isDarkMode={isDarkMode} />;
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode
        ? 'bg-gradient-to-br from-slate-900 to-slate-800 dark'
        : 'bg-gradient-to-br from-slate-50 to-blue-50'
    }`}>
      <Header
        isDarkMode={isDarkMode}
        timeRange={timeRange}
        onTimeRangeChange={setTimeRange}
        onToggleDarkMode={toggleDarkMode}
        onExportData={handleExportData}
        onRefreshData={refreshData}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {metrics.map((metric, index) => (
            <MetricCard key={index} metric={metric} />
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
          <SalesTrendChart data={salesData} />
          <CategoryDistributionChart data={categoryData} />
        </div>

        {/* Revenue & Orders Chart */}
        <div className="mb-6 sm:mb-8">
          <RevenueOrdersChart data={salesData} />
        </div>

        {/* User Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          <UserGrowthChart data={userData} />
          <GeographicDataList data={geoData} />
        </div>
      </main>

      {/* Success Notification */}
      <ExportSuccessToast show={showExportSuccess} isDarkMode={isDarkMode} />
    </div>
  );
};

export default Dashboard;