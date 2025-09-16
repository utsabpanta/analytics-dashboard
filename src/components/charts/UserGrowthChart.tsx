import React from 'react';
import { ResponsiveContainer, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import type { UserData } from '../../types';
import { ChartContainer } from '../ui/ChartContainer';
import { CHART_CONFIG } from '../../constants';

interface UserGrowthChartProps {
  data: UserData[];
}

export const UserGrowthChart: React.FC<UserGrowthChartProps> = ({ data }) => {
  return (
    <ChartContainer
      title="User Growth"
      badge="Monthly"
      badgeColor="indigo"
    >
      <ResponsiveContainer width="100%" height={CHART_CONFIG.defaultHeight}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray={CHART_CONFIG.strokeDashArray} stroke="#e2e8f0" />
          <XAxis dataKey="month" stroke="#64748b" fontSize={12} />
          <YAxis stroke="#64748b" fontSize={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              backdropFilter: 'blur(8px)'
            }}
          />
          <Legend />
          <Bar dataKey="newUsers" fill="#3b82f6" name="New Users" radius={[4, 4, 0, 0]} />
          <Bar dataKey="activeUsers" fill="#10b981" name="Active Users" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};