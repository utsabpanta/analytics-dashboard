import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';
import type { CategoryData } from '../../types';
import { ChartContainer } from '../ui/ChartContainer';
import { CHART_CONFIG } from '../../constants';

interface CategoryDistributionChartProps {
  data: CategoryData[];
}

export const CategoryDistributionChart: React.FC<CategoryDistributionChartProps> = ({
  data
}) => {
  return (
    <ChartContainer
      title="Category Distribution"
      badge="By Revenue"
      badgeColor="purple"
    >
      <ResponsiveContainer width="100%" height={CHART_CONFIG.defaultHeight}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={((props: any) => {
              const { name, value } = props;
              if (!name || typeof value !== 'number') return '';
              const total = data.reduce((sum, item) => sum + item.value, 0);
              const percent = ((value / total) * 100).toFixed(0);
              return `${name} ${percent}%`;
            }) as any}
            outerRadius={90}
            fill="#8884d8"
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              backdropFilter: 'blur(8px)'
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};