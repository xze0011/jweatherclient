
export const formatCityName = (city) => {
    return city ? city.charAt(0).toUpperCase() + city.slice(1) : 'Unknown location';
};