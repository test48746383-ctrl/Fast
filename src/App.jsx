import React, { useEffect } from 'react';
import { AppProvider } from './context/AppContext';
import { UserProvider } from './context/UserContext';
import { LanguageProvider } from './context/LanguageContext';
import { NavigationProvider } from './context/NavigationContext';
import Router from './router/Router';
import './styles/animations.css';
import './styles/glassmorphism.css';

/**
 * 🔮 App Root Component
 * 
 * Wraps the application in necessary context providers:
 * 1. AppProvider: Global app state (theme, loading, errors)
 * 2. LanguageProvider: I18n and translations
 * 3. UserProvider: User profile and preferences
 * 4. NavigationProvider: Screen routing and history
 */
const App = () => {
  // Handle PWA installation prompt
  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later
      window.deferredPrompt = e;
    });
  }, []);

  return (
    <AppProvider>
      <LanguageProvider>
        <UserProvider>
          <NavigationProvider>
            <Router />
          </NavigationProvider>
        </UserProvider>
      </LanguageProvider>
    </AppProvider>
  );
};

export default App;
