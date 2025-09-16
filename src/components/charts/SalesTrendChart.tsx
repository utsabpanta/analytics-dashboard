import React from 'react';
import { ResponsiveContainer, AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import type { SalesData } from '../../types';
import { ChartContainer } from '../ui/ChartContainer';
import { CHART_CONFIG } from '../../constants';

interface SalesTrendChartProps {
  data: SalesData[];
}

export const SalesTrendChart: React.FC<SalesTrendChartProps> = ({ data }) => {
  return (
    <ChartContainer
      title="Sales Trend"
      badge="Last 30 days"
      badgeColor="blue"
    >
      <ResponsiveContainer width="100%" height={CHART_CONFIG.defaultHeight}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray={CHART_CONFIG.strokeDashArray} stroke="#e2e8f0" />
          <XAxis dataKey="date" stroke="#64748b" fontSize={12} />
          <YAxis stroke="#64748b" fontSize={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              backdropFilter: 'blur(8px)'
            }}
          />
          <Area
            type="monotone"
            dataKey="sales"
            stroke="#3b82f6"
            fill="url(#salesGradient)"
            strokeWidth={CHART_CONFIG.strokeWidth}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};