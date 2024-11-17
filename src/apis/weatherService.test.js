import { fetchWeatherData } from './weatherService';

describe('fetchWeatherData', () => {
    process.env.REACT_APP_WEATHER_API_BASE_URL = "THIS_IS_A_FAKE_URL";
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

    it('should return a default error message when there is a network error', async () => {
        const city = 'New York';
        const country = 'US';

        // Mocking a network error
        global.fetch.mockRejectedValue(new Error('Network Error'));

        const result = await fetchWeatherData(city, country);

        // Expect a default error message for the network failure
        expect(result).toEqual({
            isSuccessful: false,
            error: 'Network Error',
        });
    });

    it('should return an error when the API base URL is missing', async () => {
        const city = 'New York';
        const country = 'US';

        // Temporarily remove the API base URL
        const originalBaseUrl = process.env.REACT_APP_WEATHER_API_BASE_URL;
        delete process.env.REACT_APP_WEATHER_API_BASE_URL;

        const result = await fetchWeatherData(city, country);

        // Restore the original base URL
        process.env.REACT_APP_WEATHER_API_BASE_URL = originalBaseUrl;

        expect(result).toEqual({
            isSuccessful: false,
            error: 'Weather API base URL is not set',
        });
    });

    it('should return an error when city or country parameter is missing', async () => {
        const city = '';
        const country = 'US';

        const result = await fetchWeatherData(city, country);

        expect(result).toEqual({
            isSuccessful: false,
            error: 'City and country are required',
        });
    });
});
