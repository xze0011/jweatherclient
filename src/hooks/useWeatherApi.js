import { useState } from 'react';
import { fetchWeatherData } from '../apis/weatherService';

/**
 * Custom hook to fetch and manage weather data.
 * @returns {object} The weather data, loading state, error state, success state, and fetch function.
 */
const useWeatherApi = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  /**
   * Fetches weather data and manages loading, success, and error states.
   * @param {string} city - The city to fetch weather data for.
   * @param {string} country - The country to fetch weather data for.
   */
  const getWeather = async (city, country) => {
    if (!city || !country) return;

    setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    const result = await fetchWeatherData(city, country);

    if (result.isSuccessful) {
      setWeatherData(result.description);
      setIsSuccess(true);
    } else {
      setError(result.error);
    }

    setIsLoading(false);
  };

  return { weatherData, isLoading, error, isSuccess, getWeather };
};

export default useWeatherApi;
