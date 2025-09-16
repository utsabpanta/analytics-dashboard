import React from 'react';

interface LoadingSpinnerProps {
  isDarkMode: boolean;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ isDarkMode }) => {
  return (
    <div className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
      isDarkMode
        ? 'bg-gradient-to-br from-slate-900 to-slate-800'
        : 'bg-gradient-to-br from-slate-50 to-blue-50'
    }`}>
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
        </div>
        <p className="text-slate-600 font-medium">Loading dashboard data...</p>
      </div>
    </div>
  );
};