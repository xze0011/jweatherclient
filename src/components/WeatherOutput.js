import React from 'react';
import PropTypes from 'prop-types';
import './css/WeatherOutput.css';
import { formatCityName } from "../utils/tools";

/**
 * WeatherOutput component displays the weather data or error message.
 */
const WeatherOutput = ({ weatherData, error = '', isSuccess }) => {
  const { city = '', description = '' } = weatherData || {};
  const formattedCity = formatCityName(city);

  return (
    <div className="weather-output">
      {isSuccess && description && city && !error && (
        <div className="success-message">
          <p>
            It&apos;s currently 1 <span className="weather-description">{description}</span> in{' '}
            <span className="city-name">{formattedCity}</span>.
          </p>
        </div>
      )}
      {error && (
        <div className="error-message" role="alert">
          {error}
        </div>
      )}
    </div>
  );
};

WeatherOutput.propTypes = {
  weatherData: PropTypes.shape({
    city: PropTypes.string,
    description: PropTypes.string,
  }),
  error: PropTypes.string,
  isSuccess: PropTypes.bool.isRequired,
};

export default WeatherOutput;
