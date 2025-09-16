import { useState } from 'react';
import type { ThemeState } from '../types';

export const useTheme = (): ThemeState => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return {
    isDarkMode,
    toggleDarkMode,
  };
};