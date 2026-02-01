import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { ROUTES } from '../router/routes';

const NavigationContext = createContext();

/**
 * 🧭 Navigation Context Provider
 * 
 * Handles application routing using History API:
 * - Stack management for back navigation
 * - Current active route
 * - Transition directions
 */
export const NavigationProvider = ({ children }) => {
  // Check URL or Default to Splash
  const [currentRoute, setCurrentRoute] = useState(ROUTES.SPLASH);
  const [historyStack, setHistoryStack] = useState([ROUTES.SPLASH]);
  const [direction, setDirection] = useState(1); // 1 = Forward, -1 = Backward

  // Handle Browser Back Button
  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state && event.state.route) {
        // Browser back button pressed
        setDirection(-1);
        setCurrentRoute(event.state.route);
        // Sync internal stack (simplified)
        setHistoryStack(prev => {
          const newStack = [...prev];
          newStack.pop();
          return newStack;
        });
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  /**
   * Navigate to a new screen
   * @param {string} route - Route Key from ROUTES
   * @param {object} params - Optional parameters
   */
  const navigate = useCallback((route, params = {}) => {
    if (route === currentRoute) return;

    setDirection(1);
    setHistoryStack(prev => [...prev, route]);
    setCurrentRoute(route);

    // Push to browser history
    window.history.pushState({ route, params }, '', `/${route.toLowerCase()}`);
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, [currentRoute]);

  /**
   * Go back one screen
   */
  const goBack = useCallback(() => {
    if (historyStack.length > 1) {
      setDirection(-1);
      const newStack = [...historyStack];
      newStack.pop(); // Remove current
      const prevRoute = newStack[newStack.length - 1];
      
      setHistoryStack(newStack);
      setCurrentRoute(prevRoute);
      
      // Update browser URL without pushing new state (replace)
      window.history.replaceState({ route: prevRoute }, '', `/${prevRoute.toLowerCase()}`);
    } else {
      // Exit app logic handled by useBackHandler
    }
  }, [historyStack]);

  /**
   * Reset stack and go to Home (e.g. after onboarding)
   */
  const resetToHome = useCallback(() => {
    setDirection(1);
    setHistoryStack([ROUTES.HOME]);
    setCurrentRoute(ROUTES.HOME);
    window.history.pushState({ route: ROUTES.HOME }, '', '/home');
  }, []);

  const value = {
    currentRoute,
    navigate,
    goBack,
    resetToHome,
    historyStack,
    direction
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

// Export hook is in separate file (useNavigation.js) as per index,
// but for Context definition, we export the Consumer here to be safe.
export const NavigationConsumer = NavigationContext.Consumer;

// Also export context for hook
export { NavigationContext };
