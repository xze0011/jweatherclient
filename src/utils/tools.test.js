import { formatCityName } from './tools';

describe('formatCityName', () => {
  it('should capitalize the first letter of a city name', () => {
    expect(formatCityName('melbourne')).toBe('Melbourne');
    expect(formatCityName('sydney')).toBe('Sydney');
  });

  it('should return "Unknown location" if city is an empty string', () => {
    expect(formatCityName('')).toBe('Unknown location');
  });

  it('should return "Unknown location" if city is null', () => {
    expect(formatCityName(null)).toBe('Unknown location');
  });
});
