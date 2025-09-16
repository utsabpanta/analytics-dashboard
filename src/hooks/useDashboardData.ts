import { useState, useEffect } from 'react';
import type { DashboardData, TimeRange, SalesData, CategoryData, UserData, GeographicData } from '../types';
import { generateSalesData, generateCategoryData, generateUserData, generateGeographicData } from '../utils/mockData';

export const useDashboardData = (timeRange: TimeRange): DashboardData => {
  const [salesData, setSalesData] = useState<SalesData[]>([]);
  const [categoryData, setCategoryData] = useState<CategoryData[]>([]);
  const [userData, setUserData] = useState<UserData[]>([]);
  const [geoData, setGeoData] = useState<GeographicData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadData = async () => {
    setIsLoading(true);
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    setSalesData(generateSalesData());
    setCategoryData(generateCategoryData());
    setUserData(generateUserData());
    setGeoData(generateGeographicData());
    setIsLoading(false);
  };

  const refreshData = () => {
    setSalesData(generateSalesData());
    setCategoryData(generateCategoryData());
  };

  useEffect(() => {
    loadData();
  }, [timeRange]);

  return {
    salesData,
    categoryData,
    userData,
    geoData,
    isLoading,
    refreshData,
  };
};