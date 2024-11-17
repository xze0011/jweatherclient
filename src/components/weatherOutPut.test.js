import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import WeatherOutput from './WeatherOutput';

describe('WeatherOutput', () => {
  test('displays weather data when isSuccess is true', () => {
    const weatherData = {
      city: 'Melbourne',
      description: 'clear sky',
    };
    render(
      <WeatherOutput
        weatherData={weatherData}
        error={null}
        isSuccess={true}
      />
    );

    const successMessage = screen.getByText(/it's currently/i);
    expect(successMessage).toHaveTextContent(/Melbourne/i);
    expect(successMessage).toHaveTextContent(/clear sky/i);
  });

  test('displays error message when error is provided', () => {
    render(
      <WeatherOutput
        weatherData={null}
        error="Failed to fetch weather data"
        isSuccess={false}
      />
    );

    const errorMessage = screen.getByRole('alert');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent('Failed to fetch weather data');
  });

});
