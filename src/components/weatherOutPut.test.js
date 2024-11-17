import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import WeatherOutput from './WeatherOutput';

describe('WeatherOutput', () => {
  test('displays weather data when isSuccess is true and isEditing is false', () => {
    render(
      <WeatherOutput
        weatherData="clear sky"
        city="melbourne"
        error={null}
        isSuccess
        isEditing={false}
      />
    );

    const successMessage = screen.getByRole('status');
    expect(successMessage).toBeInTheDocument();
    expect(successMessage).toHaveTextContent("It's currently clear sky in Melbourne.");
  });

  test('does not display weather data when isEditing is true', () => {
    render(
      <WeatherOutput
        weatherData="clear sky"
        city="melbourne"
        error={null}
        isSuccess
        isEditing
      />
    );

    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });

  test('displays error message when error is provided', () => {
    render(
      <WeatherOutput
        weatherData={null}
        city="melbourne"
        error="Failed to fetch weather data"
        isSuccess={false}
        isEditing={false}
      />
    );

    const errorMessage = screen.getByRole('alert');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent('Failed to fetch weather data');
  });

  test('does not display error message when error is not provided', () => {
    render(
      <WeatherOutput
        weatherData="clear sky"
        city="melbourne"
        error={null}
        isSuccess
        isEditing={false}
      />
    );

    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });
});
