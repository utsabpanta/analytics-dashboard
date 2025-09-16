import React from 'react';
import type { MetricCardProps } from '../../types';

export const MetricCard: React.FC<MetricCardProps> = ({ metric }) => {
  return (
    <div className="group bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-4 sm:p-6 hover:bg-white/90 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-slate-600 mb-1">{metric.title}</p>
          <p className="text-2xl font-bold text-slate-900 mb-1">{metric.value}</p>
          <p className={`text-sm font-medium flex items-center ${
            metric.changeType === 'positive' ? 'text-emerald-600' : 'text-red-500'
          }`}>
            <span className="text-xs mr-1">
              {metric.changeType === 'positive' ? '↗' : '↘'}
            </span>
            {metric.change} from last period
          </p>
        </div>
        <div className={`p-3 rounded-xl transition-colors duration-200 ${
          metric.changeType === 'positive'
            ? 'bg-emerald-100 text-emerald-600 group-hover:bg-emerald-200'
            : 'bg-red-100 text-red-600 group-hover:bg-red-200'
        }`}>
          {metric.icon}
        </div>
      </div>
    </div>
  );
};