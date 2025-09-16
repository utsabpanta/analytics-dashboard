import React from 'react';
import type { GeographicData } from '../../types';
import { ChartContainer } from '../ui/ChartContainer';

interface GeographicDataListProps {
  data: GeographicData[];
}

export const GeographicDataList: React.FC<GeographicDataListProps> = ({ data }) => {
  return (
    <ChartContainer
      title="Top Countries"
      badge="By Users"
      badgeColor="cyan"
    >
      <div className="space-y-4">
        {data.map((country, index) => (
          <div
            key={country.country}
            className="group flex items-center justify-between p-3 rounded-xl hover:bg-slate-50/50 transition-colors duration-200"
          >
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-sm font-bold text-white">{index + 1}</span>
              </div>
              <span className="font-medium text-slate-900 group-hover:text-slate-700">
                {country.country}
              </span>
            </div>
            <div className="text-right">
              <div className="text-sm font-semibold text-slate-900">
                {country.users.toLocaleString()}
              </div>
              <div className="text-xs text-slate-500">
                ${(country.revenue / 1000).toFixed(0)}K revenue
              </div>
            </div>
          </div>
        ))}
      </div>
    </ChartContainer>
  );
};