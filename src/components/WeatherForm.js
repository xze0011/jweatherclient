import React from 'react';
import PropTypes from 'prop-types';
import './css/WeatherForm.css';
import { isValidLocation } from '../utils/validator';

const WeatherForm = ({ city, country, setCity, setCountry, handleFetchWeather, isLoading, isEditing, setIsEditing }) => {
    const handleCityChange = (e) => {
        const inputValue = e.target.value;
        if (isValidLocation(inputValue)) {
            if (!isEditing) setIsEditing(true);
            setCity(inputValue);
        }
    };

    const handleCountryChange = (e) => {
        const inputValue = e.target.value;
        if (isValidLocation(inputValue)) {
            if (!isEditing) setIsEditing(true);
            setCountry(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleFetchWeather();
        setIsEditing(false);
    };

    return (
        <form className="weather-form" onSubmit={handleFormSubmit} aria-labelledby="weatherFormTitle">
            <div className="input-group">
                <div>
                    <input
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
                    <input
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
                    aria-live="polite"
                >
                    {isLoading ? "Loading..." : "Get Weather"}
                </button>
            </div>
        </form>
    );
};

WeatherForm.propTypes = {
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    setCity: PropTypes.func.isRequired,
    setCountry: PropTypes.func.isRequired,
    handleFetchWeather: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    isEditing: PropTypes.bool.isRequired,
    setIsEditing: PropTypes.func.isRequired,
};

export default WeatherForm;
