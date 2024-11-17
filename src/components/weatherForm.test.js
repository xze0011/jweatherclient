import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import WeatherForm from './WeatherForm';

jest.mock('../utils/validator', () => ({
  isValidLocation: jest.fn(),
}));

describe('WeatherForm', () => {
  const mockSetCity = jest.fn();
  const mockSetCountry = jest.fn();
  const mockHandleFetchWeather = jest.fn();
  const mockSetIsEditing = jest.fn();

  const defaultProps = {
    city: '',
    country: '',
    setCity: mockSetCity,
    setCountry: mockSetCountry,
    handleFetchWeather: mockHandleFetchWeather,
    isLoading: false,
    isEditing: false,
    setIsEditing: mockSetIsEditing,
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

  test('calls handleFetchWeather on form submit', () => {
    render(<WeatherForm {...defaultProps} city="Melbourne" country="Australia" />);

    const button = screen.getByRole('button', { name: /get weather/i });
    fireEvent.click(button);

    expect(mockHandleFetchWeather).toHaveBeenCalled();
    expect(mockSetIsEditing).toHaveBeenCalledWith(false);
  });

  test('disables submit button when loading or inputs are empty', () => {
    const { rerender } = render(<WeatherForm {...defaultProps} isLoading={true} />);

    const button = screen.getByRole('button', { name: /loading/i });
    expect(button).toBeDisabled();

    rerender(<WeatherForm {...defaultProps} city="" country="Australia" isLoading={false} />);
    expect(button).toBeDisabled();

    rerender(<WeatherForm {...defaultProps} city="Melbourne" country="" />);
    expect(button).toBeDisabled();

    rerender(<WeatherForm {...defaultProps} city="Melbourne" country="Australia" isLoading={false} />);
    expect(button).not.toBeDisabled();
  });
});
