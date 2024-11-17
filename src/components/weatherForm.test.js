import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import WeatherForm from './WeatherForm';

jest.mock('../utils/validator', () => ({
  isValidLocation: jest.fn(),
}));

describe('WeatherForm', () => {
  const mockHandleFetchWeather = jest.fn();

  const defaultProps = {
    handleFetchWeather: mockHandleFetchWeather,
    isLoading: false,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('renders submit button', () => {
    render(<WeatherForm {...defaultProps} />);

    expect(screen.getByRole('button', { name: /get weather/i })).toBeInTheDocument();
  });

  test('disables submit button when loading or inputs are empty', () => {
    const { rerender } = render(<WeatherForm {...defaultProps} isLoading={true} />);

    const button = screen.getByRole('button', { name: /Loading.../i });
    expect(button).toBeDisabled();

    rerender(<WeatherForm {...defaultProps} isLoading={false} />);
    expect(button).toBeDisabled();
  });
});
