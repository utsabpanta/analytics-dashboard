import React from 'react';
import { Download } from 'lucide-react';

interface ExportSuccessToastProps {
  show: boolean;
  isDarkMode: boolean;
}

export const ExportSuccessToast: React.FC<ExportSuccessToastProps> = ({
  show,
  isDarkMode
}) => {
  if (!show) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-slide-up">
      <div className={`flex items-center space-x-3 px-4 py-3 rounded-lg shadow-lg ${
        isDarkMode
          ? 'bg-green-800 text-green-100 border border-green-700'
          : 'bg-green-100 text-green-800 border border-green-200'
      }`}>
        <Download className="w-5 h-5" />
        <span className="font-medium">Data exported successfully!</span>
      </div>
    </div>
  );
};