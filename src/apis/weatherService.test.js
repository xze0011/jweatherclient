import { fetchWeatherData } from './weatherService';

describe('fetchWeatherData', () => {
    beforeEach(() => {
        global.fetch = jest.fn();
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should return weather description when API call is successful', async () => {
        const city = 'New York';
        const country = 'US';

        // Mocking a successful fetch response
        const mockResponse = { description: 'Sunny with light showers' };
        global.fetch.mockResolvedValue({
            ok: true,
            json: async () => mockResponse,
        });

        // Call the function and check the result
        const result = await fetchWeatherData(city, country);

        // Verify that fetch was called with the expected URL
        expect(global.fetch).toHaveBeenCalledWith(
            `${process.env.REACT_APP_WEATHER_API_BASE_URL}/api/Weather?city=${city}&country=${country}`
        );

        // Expect the function to return the correct weather description
        expect(result).toEqual({
            isSuccessful: true,
            description: 'Sunny with light showers',
        });
    });

    it('should return an error message when API call fails', async () => {
        const city = 'InvalidCity';
        const country = 'US';

        global.fetch.mockResolvedValue({
            ok: false,
            status: 404,
            json: jest.fn().mockResolvedValue({
                error: 'No weather data available for xxx, au.',
            }),
        });

        const result = await fetchWeatherData(city, country);

        // Verify that fetch was called with the correct URL
        expect(global.fetch).toHaveBeenCalledWith(
            `${process.env.REACT_APP_WEATHER_API_BASE_URL}/api/Weather?city=${city}&country=${country}`
        );

        expect(result).toEqual({
            isSuccessful: false,
            error: 'No weather data available for xxx, au.',
        });
    });

    it('should return a default error message when there is a network error', async () => {
        const city = 'New York';
        const country = 'US';

        // Mocking a network error
        global.fetch.mockRejectedValue(new Error('Network Error'));

        const result = await fetchWeatherData(city, country);

        // Verify that fetch was called with the correct URL
        expect(global.fetch).toHaveBeenCalledWith(
            `${process.env.REACT_APP_WEATHER_API_BASE_URL}/api/Weather?city=${city}&country=${country}`
        );

        // Expect a default error message for the network failure
        expect(result).toEqual({
            isSuccessful: false,
            error: 'Network Error',
        });
    });
});