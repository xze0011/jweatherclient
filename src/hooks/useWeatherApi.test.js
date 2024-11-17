import { act } from 'react';
import { renderHook } from '@testing-library/react';
import useWeatherApi from './useWeatherApi';
import { fetchWeatherData } from '../apis/weatherService';

jest.mock('../apis/weatherService');

describe('useWeatherApi', () => {
    const mockCity = 'Melbourne';
    const mockCountry = 'AU';

    beforeEach(() => {
        jest.clearAllMocks();
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('should initialize with default values', () => {
        const { result } = renderHook(() => useWeatherApi());

        expect(result.current.weatherData).toBe(null);
        expect(result.current.isLoading).toBe(false);
        expect(result.current.error).toBe(null);
        expect(result.current.isSuccess).toBe(false);
    });

    test('should set loading state and call fetchWeatherData', async () => {
        fetchWeatherData.mockResolvedValue({
            isSuccessful: true,
            description: 'clear sky',
        });

        const { result } = renderHook(() => useWeatherApi());

        await act(async () => {
            result.current.getWeather(mockCity, mockCountry);
        });

        expect(fetchWeatherData).toHaveBeenCalledWith(mockCity, mockCountry);
        expect(result.current.isLoading).toBe(false);
        expect(result.current.weatherData).toStrictEqual({ "city": "Melbourne", "description": "clear sky" });
        expect(result.current.isSuccess).toBe(true);
        expect(result.current.error).toBe(null);
    });

    test('should handle error when fetchWeatherData fails', async () => {
        fetchWeatherData.mockResolvedValue({
            isSuccessful: false,
            error: 'Failed to fetch weather data',
        });

        const { result } = renderHook(() => useWeatherApi());

        await act(async () => {
            result.current.getWeather(mockCity, mockCountry);
        });

        expect(fetchWeatherData).toHaveBeenCalledWith(mockCity, mockCountry);
        expect(result.current.isLoading).toBe(false);
        expect(result.current.weatherData).toBe(null);
        expect(result.current.isSuccess).toBe(false);
        expect(result.current.error).toBe('Failed to fetch weather data');
    });

    test('should not call fetchWeatherData if city or country is missing', async () => {
        const { result } = renderHook(() => useWeatherApi());

        await act(async () => {
            result.current.getWeather('', mockCountry);
        });

        expect(fetchWeatherData).not.toHaveBeenCalled();
        expect(result.current.isLoading).toBe(false);
        expect(result.current.weatherData).toBe(null);
        expect(result.current.isSuccess).toBe(false);
        expect(result.current.error).toBe(null);
    });
});
