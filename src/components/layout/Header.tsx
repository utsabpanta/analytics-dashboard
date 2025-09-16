import React from 'react';
import { TrendingUp, Filter, Download, Maximize2, Moon, Sun, RefreshCw } from 'lucide-react';
import type { TimeRange } from '../../types';
import { TIME_RANGES } from '../../constants';

interface HeaderProps {
  isDarkMode: boolean;
  timeRange: TimeRange;
  onTimeRangeChange: (range: TimeRange) => void;
  onToggleDarkMode: () => void;
  onExportData: () => void;
  onRefreshData: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  isDarkMode,
  timeRange,
  onTimeRangeChange,
  onToggleDarkMode,
  onExportData,
  onRefreshData
}) => {
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <header className={`backdrop-blur-md border-b sticky top-0 z-50 shadow-sm transition-colors duration-300 ${
      isDarkMode
        ? 'bg-slate-900/80 border-slate-700/50'
        : 'bg-white/80 border-slate-200/50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <h1 className={`text-xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${
                isDarkMode
                  ? 'from-slate-100 to-slate-300'
                  : 'from-slate-900 to-slate-600'
              }`}>
                Analytics Dashboard
              </h1>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className={`flex items-center space-x-2 rounded-lg p-1 ${
              isDarkMode ? 'bg-slate-800/70' : 'bg-slate-100/70'
            }`}>
              <Filter className={`w-4 h-4 ml-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`} />
              <select
                value={timeRange}
                onChange={(e) => onTimeRangeChange(e.target.value as TimeRange)}
                className={`bg-transparent border-none outline-none text-sm font-medium pr-2 ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                {TIME_RANGES.map(({ value, label }) => (
                  <option key={value} value={value}>{label}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={onExportData}
                className={`p-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:-translate-y-0.5 ${
                  isDarkMode
                    ? 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-800'
                } shadow-lg hover:shadow-xl`}
                title="Export Data"
              >
                <Download className="w-4 h-4" />
              </button>

              <button
                onClick={toggleFullscreen}
                className={`p-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:-translate-y-0.5 ${
                  isDarkMode
                    ? 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-800'
                } shadow-lg hover:shadow-xl`}
                title="Toggle Fullscreen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

              <button
                onClick={onToggleDarkMode}
                className={`p-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:-translate-y-0.5 ${
                  isDarkMode
                    ? 'bg-gradient-to-r from-yellow-600 to-orange-600 text-white'
                    : 'bg-gradient-to-r from-slate-600 to-slate-700 text-white'
                } shadow-lg hover:shadow-xl`}
                title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              <button
                onClick={onRefreshData}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg text-sm font-medium hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <RefreshCw className="w-4 h-4" />
                <span className="hidden sm:inline">Refresh</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};