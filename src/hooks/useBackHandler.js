import { useEffect, useState } from 'react';
import { useNavigation } from './useNavigation';
import { useAppContext } from '../context/AppContext';
import { ROUTES } from '../router/routes';

/**
 * 🪝 useBackHandler Hook
 * 
 * Handles the "Double Back to Exit" logic on Android/PWA.
 * 
 * Behavior:
 * 1. If stack > 1: Go back normally.
 * 2. If stack == 1 (Home): Show toast "Press back again to exit".
 * 3. If pressed again within 2s: Allow browser default (Close App).
 */
export const useBackHandler = () => {
  const { goBack, historyStack, currentRoute } = useNavigation();
  const { showToast } = useAppContext();
  const [exitAttempt, setExitAttempt] = useState(false);

  useEffect(() => {
    const handleBackButton = (event) => {
      // Only intervene if we are at the root (Home or Splash)
      // or if we want to override default browser behavior
      
      // If we have history in OUR app stack, pop it
      if (historyStack.length > 1) {
        event.preventDefault(); // Stop browser exit
        goBack();
        return;
      }

      // If we are at root (Home)
      if (currentRoute === ROUTES.HOME) {
        if (!exitAttempt) {
          event.preventDefault(); // Stop exit
          setExitAttempt(true);
          showToast('Press back again to exit', 'info', 2000);

          // Reset attempt after 2 seconds
          setTimeout(() => {
            setExitAttempt(false);
          }, 2000);
        } else {
          // Allow exit (do nothing, let browser handle it)
          // or strictly: window.close(); (often blocked by browsers)
        }
      }
    };

    // Note: 'popstate' is handled in NavigationContext.
    // This hook is specifically for the "Logic" of what happens when back is pressed.
    // However, intercepting the actual physical back button in standard Web is tricky
    // without the History API. NavigationContext handles the event.
    // This hook is useful if we attach it to a UI Back Button or if using Capacitor/Cordova later.
    
    // For PWA purely, we rely on popstate in NavigationContext.
    // We will expose a method to be called by NavigationContext if needed,
    // but typically this logic lives inside the Context or a top-level listener.
    
  }, [historyStack, currentRoute, goBack, exitAttempt, showToast]);

  // Return handler to be used by UI back buttons
  const handleUIBack = () => {
    if (historyStack.length > 1) {
      goBack();
    } else {
      // Logic for exit confirmation if desired on UI button
    }
  };

  return { handleUIBack };
};
