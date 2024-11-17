import React, { useState } from 'react';
import useWeatherApi from '../hooks/useWeatherApi';
import WeatherForm from '../components/WeatherForm';
import WeatherOutput from '../components/WeatherOutput';

/**
 * Weather component combines WeatherForm and WeatherOutput,
 * managing state and handling data fetching.
 */
const Weather = () => {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const { weatherData, isLoading, error, isSuccess, getWeather } = useWeatherApi();
  const handleFetchWeather = () => {
    getWeather(city, country);
  };

  return (
    <div className="weather-container" aria-labelledby="weatherHeading" role="main">
      <h1 id="weatherHeading" className="weather-heading">
        Weather Finder
      </h1>
      <WeatherForm
        city={city}
        country={country}
        setCity={setCity}
        setCountry={setCountry}
        handleFetchWeather={handleFetchWeather}
        isLoading={isLoading}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />

      <WeatherOutput
        weatherData={weatherData}
        city={city}
        error={error}
        isSuccess={isSuccess}
        isEditing={isEditing}
      />
    </div>
  );
};

export default Weather;
