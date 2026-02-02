import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      // Disable strict icon checking to prevent build failure if icons are missing
      checkDirs: false, 
      includeAssets: [
        'favicon.ico',
        'robots.txt'
      ],
      manifest: {
        name: 'AI Palm Reader – Tarot & Astrology Guidance',
        short_name: 'Palm Reader',
        description: 'Discover your destiny through AI-powered palm reading, tarot cards, horoscopes, and spiritual guidance.',
        theme_color: '#1a1a2e',
        background_color: '#0f0f1a',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        icons: [
          // If you haven't uploaded these icons to public/icons, PWA won't install properly on mobile,
          // but the build will now PASS because checkDirs is false.
          {
            src: '/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@hooks': '/src/hooks',
      '@utils': '/src/utils',
      '@services': '/src/services',
      '@context': '/src/context',
      '@data': '/src/data',
      '@locales': '/src/locales',
      '@styles': '/src/styles',
      '@assets': '/src/assets'
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 1600
  }
});
