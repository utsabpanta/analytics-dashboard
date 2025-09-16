import React from 'react';
import { ResponsiveContainer, LineChart, Line, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import type { SalesData } from '../../types';
import { ChartContainer } from '../ui/ChartContainer';
import { CHART_CONFIG } from '../../constants';

interface RevenueOrdersChartProps {
  data: SalesData[];
}

export const RevenueOrdersChart: React.FC<RevenueOrdersChartProps> = ({ data }) => {
  return (
    <ChartContainer
      title="Revenue & Orders Overview"
    >
      <div className="flex space-x-2 mb-4">
        <div className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
          Revenue
        </div>
        <div className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
          Orders
        </div>
      </div>
      <ResponsiveContainer width="100%" height={CHART_CONFIG.largeHeight}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray={CHART_CONFIG.strokeDashArray} stroke="#e2e8f0" />
          <XAxis dataKey="date" stroke="#64748b" fontSize={12} />
          <YAxis yAxisId="left" stroke="#64748b" fontSize={12} />
          <YAxis yAxisId="right" orientation="right" stroke="#64748b" fontSize={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              backdropFilter: 'blur(8px)'
            }}
          />
          <Legend />
          <Bar yAxisId="left" dataKey="orders" fill="#10b981" radius={[4, 4, 0, 0]} />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="revenue"
            stroke="#f59e0b"
            strokeWidth={3}
            dot={{ fill: '#f59e0b', strokeWidth: 2, r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};