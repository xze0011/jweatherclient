export const isValidLocation = (location) => {
    if (location === '') return true;
    return /^[a-zA-Z\s]+$/.test(location.trim());
};
