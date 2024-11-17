import { isValidLocation } from './validator';

describe('isValidLocation', () => {
  test('returns true for an empty string', () => {
    expect(isValidLocation('')).toBe(true);
  });

  test('returns true for a valid city name with only letters', () => {
    expect(isValidLocation('Melbourne')).toBe(true);
  });

  test('returns true for a valid city name with letters and spaces', () => {
    expect(isValidLocation('New York')).toBe(true);
  });

  test('returns false for a city name with numbers', () => {
    expect(isValidLocation('Melbourne123')).toBe(false);
  });

  test('returns false for a city name with special characters', () => {
    expect(isValidLocation('Paris@')).toBe(false);
  });

  test('returns false for a city name with only spaces', () => {
    expect(isValidLocation('   ')).toBe(false);
  });
});
