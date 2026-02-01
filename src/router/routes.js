/**
 * 🛤️ App Route Constants
 * 
 * Central registry of all available screens in the app.
 * Used by NavigationContext and Router.
 */

export const ROUTES = {
  // Entry Flow
  SPLASH: 'SPLASH',
  LANGUAGE: 'LANGUAGE',
  ONBOARDING: 'ONBOARDING',
  PROFILE_SETUP: 'PROFILE_SETUP',
  
  // Main App
  HOME: 'HOME',
  
  // Features
  PALM_SCAN: 'PALM_SCAN',
  CHAT: 'CHAT',
  TAROT: 'TAROT',
  DAILY: 'DAILY',
  HOROSCOPE: 'HOROSCOPE',
  LOVE: 'LOVE',
  
  // Utilities
  SETTINGS: 'SETTINGS',
  PRIVACY: 'PRIVACY',
};

/**
 * Helper to determine if the bottom navigation bar should be visible
 * @param {string} route - The current route key
 * @returns {boolean}
 */
export const shouldShowBottomNav = (route) => {
  const NO_NAV_ROUTES = [
    ROUTES.SPLASH, 
    ROUTES.LANGUAGE, 
    ROUTES.ONBOARDING, 
    ROUTES.PROFILE_SETUP,
    ROUTES.PALM_SCAN // Hide during scanning for immersion
  ];
  
  return !NO_NAV_ROUTES.includes(route);
};

/**
 * Route Transition Direction
 * Helps determine if animation should slide left or right
 * Higher index = Slide Left (Push)
 * Lower index = Slide Right (Pop)
 */
export const ROUTE_DEPTH = {
  [ROUTES.SPLASH]: 0,
  [ROUTES.LANGUAGE]: 1,
  [ROUTES.ONBOARDING]: 2,
  [ROUTES.PROFILE_SETUP]: 3,
  [ROUTES.HOME]: 10,
  [ROUTES.DAILY]: 11,
  [ROUTES.HOROSCOPE]: 11,
  [ROUTES.TAROT]: 11,
  [ROUTES.LOVE]: 11,
  [ROUTES.PALM_SCAN]: 12,
  [ROUTES.CHAT]: 12,
  [ROUTES.SETTINGS]: 12,
};
