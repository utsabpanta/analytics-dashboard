import { format, subDays, startOfDay } from 'date-fns';
import type { SalesData, CategoryData, UserData, GeographicData } from '../types';

export const generateSalesData = (): SalesData[] => {
  const data: SalesData[] = [];
  for (let i = 29; i >= 0; i--) {
    const date = startOfDay(subDays(new Date(), i));
    data.push({
      date: format(date, 'MMM dd'),
      sales: Math.floor(Math.random() * 1000) + 500,
      orders: Math.floor(Math.random() * 200) + 50,
      revenue: Math.floor(Math.random() * 50000) + 25000,
    });
  }
  return data;
};

export const generateCategoryData = (): CategoryData[] => [
  { name: 'Electronics', value: 35, color: '#3b82f6' },
  { name: 'Clothing', value: 25, color: '#10b981' },
  { name: 'Books', value: 20, color: '#f59e0b' },
  { name: 'Home & Garden', value: 15, color: '#ef4444' },
  { name: 'Sports', value: 5, color: '#8b5cf6' },
];

export const generateUserData = (): UserData[] => [
  { month: 'Jan', newUsers: 1200, activeUsers: 8500, retention: 85 },
  { month: 'Feb', newUsers: 1100, activeUsers: 9200, retention: 82 },
  { month: 'Mar', newUsers: 1400, activeUsers: 9800, retention: 88 },
  { month: 'Apr', newUsers: 1600, activeUsers: 10500, retention: 90 },
  { month: 'May', newUsers: 1300, activeUsers: 11200, retention: 87 },
  { month: 'Jun', newUsers: 1800, activeUsers: 12000, retention: 92 },
];

export const generateGeographicData = (): GeographicData[] => [
  { country: 'United States', users: 45230, revenue: 2340000 },
  { country: 'Germany', users: 28150, revenue: 1890000 },
  { country: 'United Kingdom', users: 22100, revenue: 1560000 },
  { country: 'France', users: 19800, revenue: 1320000 },
  { country: 'Canada', users: 15600, revenue: 980000 },
  { country: 'Australia', users: 12400, revenue: 780000 },
];