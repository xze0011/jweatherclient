/**
 * Fetch weather data based on city and country.
 * @param {string} city - The city to fetch weather data for.
 * @param {string} country - The country to fetch weather data for.
 * @returns {object} An object containing `isSuccessful`, and either `description` or `error`.
 */

export const fetchWeatherData = async (city, country) => {
  try {
    if (!process.env.REACT_APP_WEATHER_API_BASE_URL) throw new Error("Weather API base URL is not set");
    if (!city || !country) throw new Error("City and country are required");

    const response = await fetch(`${process.env.REACT_APP_WEATHER_API_BASE_URL}/api/Weather?city=${city}&country=${country}`);

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      const errorMessage = errorData && errorData.error ? errorData.error : `HTTP error! status: ${response.status}`;
      throw new Error(errorMessage);
    }

    const data = await response.json();
    return { isSuccessful: true, description: data.description };

  } catch (error) {
    const errorMessage = error.message || "Failed to fetch weather data";
    return { isSuccessful: false, error: errorMessage };
  }
};
