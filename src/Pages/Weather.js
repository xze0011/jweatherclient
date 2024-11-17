import React from 'react';
import useWeatherApi from '../hooks/useWeatherApi';
import WeatherForm from '../components/WeatherForm';
import WeatherOutput from '../components/WeatherOutput';

/**
 * Weather component combines WeatherForm and WeatherOutput,
 * managing state and handling data fetching.
 */
const Weather = () => {
  const { weatherData, isLoading, error, isSuccess, getWeather } = useWeatherApi();

  const handleFetchWeather = (city, country) => {
    getWeather(city, country);
  };

  return (
    <div className="weather-container">
      <h1 className="weather-heading">
        Weather Finder
      </h1>
      <WeatherForm
        handleFetchWeather={handleFetchWeather}
        isLoading={isLoading}
      />
      <WeatherOutput
        weatherData={weatherData}
        error={error}
        isSuccess={isSuccess}
      />
    </div>
  );
};

export default Weather;
