import { STORAGE_KEYS } from '../utils/constants';

/**
 * 📦 Storage Service
 * 
 * Simple wrapper for LocalStorage with error handling.
 */
export const storageService = {
  save: (key, data) => {
    try {
      const serialized = JSON.stringify(data);
      localStorage.setItem(key, serialized);
    } catch (e) {
      console.error('Storage Save Error:', e);
    }
  },

  get: (key) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (e) {
      console.error('Storage Get Error:', e);
      return null;
    }
  },

  remove: (key) => {
    localStorage.removeItem(key);
  },

  clearAll: () => {
    localStorage.clear();
  }
};
