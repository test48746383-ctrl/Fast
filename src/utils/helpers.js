/**
 * Pause execution for a given time (for simulating API latency or animations)
 * @param {number} ms 
 */
export const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Get random integer between min and max
 */
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

/**
 * Capitalize first letter
 */
export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

/**
 * Get Zodiac Sign from Date
 * @param {number} day 
 * @param {number} month (1-12)
 */
export const getZodiacSign = (day, month) => {
  const signs = [
    { sign: 'capricorn', end: 19 },
    { sign: 'aquarius', end: 18 },
    { sign: 'pisces', end: 20 },
    { sign: 'aries', end: 19 },
    { sign: 'taurus', end: 20 },
    { sign: 'gemini', end: 20 },
    { sign: 'cancer', end: 22 },
    { sign: 'leo', end: 22 },
    { sign: 'virgo', end: 22 },
    { sign: 'libra', end: 22 },
    { sign: 'scorpio', end: 21 },
    { sign: 'sagittarius', end: 21 },
    { sign: 'capricorn', end: 31 }
  ];
  
  // Adjust month index to 0-11 for array logic if needed, but here we iterate
  if (day <= signs[month - 1].end) {
    return signs[month - 1].sign;
  } else {
    return signs[month].sign;
  }
};
