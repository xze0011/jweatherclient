import React from 'react';
import PropTypes from 'prop-types';
import './css/WeatherOutput.css';
import { formatCityName } from "../utils/tools";

/**
 * WeatherOutput component displays the weather data or error message.
 */
const WeatherOutput = ({ weatherData = '', city = '', error = '', isSuccess, isEditing }) => {
  const formattedCity = formatCityName(city);

  return (
    <div className="weather-output" aria-live="polite" aria-atomic="true">
      {!isEditing && isSuccess && weatherData && !error && (
        <div className="success-message" role="status">
          <p>
            It&apos;s currently <span className="weather-description">{weatherData}</span> in{' '}
            <span className="city-name">{formattedCity}</span>.
          </p>
        </div>
      )}
      {error && (
        <div className="error-message" role="alert" aria-live="assertive">
          {error}
        </div>
      )}
    </div>
  );
};

WeatherOutput.propTypes = {
  weatherData: PropTypes.string,
  city: PropTypes.string,
  error: PropTypes.string,
  isSuccess: PropTypes.bool.isRequired,
  isEditing: PropTypes.bool.isRequired,
};

export default WeatherOutput;
