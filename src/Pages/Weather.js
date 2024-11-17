import React, { useState } from 'react';
import WeatherForm from '../components/WeatherForm';

/**
 * Weather component combines WeatherForm and WeatherOutput,
 * managing state and handling data fetching.
 */
function Weather() {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [isEditing, setIsEditing] = useState(false);

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
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />
    </div>
  );
}

export default Weather;
