import { useState } from 'react';
import type { ExportState, ExportPayload } from '../types';

export const useExport = (): ExportState => {
  const [showExportSuccess, setShowExportSuccess] = useState(false);

  const exportData = (data: ExportPayload) => {
    try {
      const exportPayload = {
        dashboardTitle: 'Analytics Dashboard Export',
        exportedAt: new Date().toISOString(),
        ...data,
      };

      const jsonString = JSON.stringify(exportPayload, null, 2);
      const blob = new Blob([jsonString], { type: 'application/json' });
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = `analytics-dashboard-${new Date().toISOString().split('T')[0]}.json`;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setShowExportSuccess(true);
      setTimeout(() => setShowExportSuccess(false), 3000);
      console.log('Data exported successfully!');
    } catch (error) {
      console.error('Error exporting data:', error);
      alert('Failed to export data. Please try again.');
    }
  };

  return {
    showExportSuccess,
    exportData,
  };
};