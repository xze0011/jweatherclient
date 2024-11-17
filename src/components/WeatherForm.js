import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './css/WeatherForm.css';
import { isValidLocation } from '../utils/validator';

const WeatherForm = ({ handleFetchWeather, isLoading = false }) => {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    const handleCityChange = (e) => {
        const inputValue = e.target.value;
        // Only validate if the user starts entering a value
        if (inputValue === '' || isValidLocation(inputValue)) {
            setCity(inputValue);
        }
    };

    const handleCountryChange = (e) => {
        const inputValue = e.target.value;
        // Only validate if the user starts entering a value
        if (inputValue === '' || isValidLocation(inputValue)) {
            setCountry(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleFetchWeather(city, country);
    };

    return (
        <form className="weather-form" onSubmit={handleFormSubmit} noValidate>
            <div className="input-group">
                <div>
                    <label htmlFor="cityInput">City: </label>
                    <input
                        id="cityInput"
                        className="input-field"
                        type="text"
                        placeholder="Enter City"
                        value={city}
                        onChange={handleCityChange}
                        required
                        maxLength="50"
                        title="City should contain only letters and spaces"
                        aria-label="City"
                        aria-required="true"
                    />
                </div>
                <div>
                    <label htmlFor="countryInput">Country: </label>
                    <input
                        id="countryInput"
                        className="input-field"
                        type="text"
                        placeholder="Enter Country"
                        value={country}
                        onChange={handleCountryChange}
                        required
                        maxLength="50"
                        title="Country should contain only letters and spaces"
                        aria-label="Country"
                        aria-required="true"
                    />
                </div>
                <button
                    className="submit-button"
                    type="submit"
                    disabled={isLoading || !city || !country}
                    aria-busy={isLoading}
                >
                    {isLoading ? "Loading..." : "Get Weather"}
                </button>
            </div>
        </form>
    );
};

WeatherForm.propTypes = {
    handleFetchWeather: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
};

export default WeatherForm;
