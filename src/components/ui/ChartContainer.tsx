import React from 'react';
import type { ChartContainerProps } from '../../types';

export const ChartContainer: React.FC<ChartContainerProps> = ({
  title,
  badge,
  badgeColor = 'blue',
  children
}) => {
  const getBadgeClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: 'bg-blue-100 text-blue-700',
      purple: 'bg-purple-100 text-purple-700',
      emerald: 'bg-emerald-100 text-emerald-700',
      orange: 'bg-orange-100 text-orange-700',
      indigo: 'bg-indigo-100 text-indigo-700',
      cyan: 'bg-cyan-100 text-cyan-700',
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-4 sm:p-6 hover:bg-white/90 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        {badge && (
          <div className={`px-3 py-1 rounded-full text-xs font-medium ${getBadgeClasses(badgeColor)}`}>
            {badge}
          </div>
        )}
      </div>
      {children}
    </div>
  );
};