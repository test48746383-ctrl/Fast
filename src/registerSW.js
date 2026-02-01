import { registerSW as register } from 'virtual:pwa-register';

/**
 * 🚀 Service Worker Registration
 * 
 * Handles PWA offline capabilities, caching, and auto-updates.
 * Uses vite-plugin-pwa's virtual module.
 */

export function registerSW() {
  if ('serviceWorker' in navigator) {
    // Register the service worker
    const updateSW = register({
      onNeedRefresh() {
        console.log('🔄 New content available, click on reload button to update.');
        // In a real app, you might want to show a toast here
        // dispatchEvent(new CustomEvent('swUpdated', { detail: updateSW }));
      },
      onOfflineReady() {
        console.log('✅ App is ready to work offline.');
      },
      onRegisterError(error) {
        console.error('❌ Service Worker registration failed:', error);
      }
    });
  }
}
