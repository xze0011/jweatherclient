import { fetchWeatherData } from './weatherService';

describe('fetchWeatherData', () => {
    beforeEach(() => {
        global.fetch = jest.fn();
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should return an error when city or country parameter is missing', async () => {
        const city = '';
        const country = 'US';

        const result = await fetchWeatherData(city, country);

        expect(result).toEqual({
            isSuccessful: false,
            error: 'Weather API base URL is not set',
        });
    });
});
