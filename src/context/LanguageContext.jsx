import React, { createContext, useContext, useState, useEffect } from 'react';
import { RESOURCES, DEFAULT_LANGUAGE } from '../locales';

const LanguageContext = createContext();

/**
 * 🌍 Language Context Provider
 * 
 * Handles internalization (i18n):
 * - Current language state
 * - Translation function (t)
 * - Persisting language preference
 */
export const LanguageProvider = ({ children }) => {
  // Initialize from localStorage or default
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('app_language');
    return saved && RESOURCES[saved] ? saved : DEFAULT_LANGUAGE;
  });

  // Save to localStorage when changed
  useEffect(() => {
    localStorage.setItem('app_language', language);
    // Set html lang attribute for accessibility
    document.documentElement.lang = language;
  }, [language]);

  /**
   * Translation Helper Function
   * Usage: t('home.welcome') -> "Welcome,"
   * Supports nested keys
   */
  const t = (key) => {
    const keys = key.split('.');
    let value = RESOURCES[language].translation;

    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        // Fallback to English if key missing
        console.warn(`Missing translation: ${key} in ${language}`);
        return key; 
      }
    }
    return value;
  };

  /**
   * Change Application Language
   */
  const changeLanguage = (langCode) => {
    if (RESOURCES[langCode]) {
      setLanguage(langCode);
    }
  };

  const value = {
    language,
    changeLanguage,
    t,
    availableLanguages: RESOURCES
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
