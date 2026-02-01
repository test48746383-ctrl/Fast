/**
 * ═══════════════════════════════════════════════════════════════
 * AI Palm Reader - Tailwind CSS Configuration
 * ═══════════════════════════════════════════════════════════════
 * 
 * Theme: Dark Astrology / Cosmic / Premium
 * Design: Mobile-first, Glassmorphism, Smooth animations
 * 
 * ═══════════════════════════════════════════════════════════════
 */

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ─────────────────────────────────────────────────────────
      // COLOR PALETTE - Cosmic Astrology Theme
      // ─────────────────────────────────────────────────────────
      colors: {
        // Primary Background Colors
        cosmic: {
          900: '#0a0a14', // Deepest background
          800: '#0f0f1a', // Main background
          700: '#141428', // Card backgrounds
          600: '#1a1a2e', // Elevated surfaces
          500: '#16213e', // Accent surfaces
        },
        
        // Mystical Purple Gradient
        mystic: {
          900: '#2d1b4e',
          800: '#3d2066',
          700: '#4c2882',
          600: '#5b319e',
          500: '#6b3fa0',
          400: '#7c4dff',
          300: '#9d7aff',
          200: '#b9a0ff',
          100: '#d4c6ff',
        },
        
        // Celestial Blue Accents
        celestial: {
          900: '#0d253f',
          800: '#1a3a5c',
          700: '#264d73',
          600: '#3366a0',
          500: '#4a7bc4',
          400: '#667eea',
          300: '#8fa4ef',
          200: '#a8c0ff',
          100: '#cfd9ff',
        },
        
        // Accent Glow Colors
        glow: {
          cyan: '#00f5ff',
          purple: '#bf00ff',
          blue: '#4a7bc4',
          pink: '#ff6b9d',
          gold: '#ffd700',
        },
        
        // Glassmorphism Overlays
        glass: {
          light: 'rgba(255, 255, 255, 0.08)',
          medium: 'rgba(255, 255, 255, 0.12)',
          heavy: 'rgba(255, 255, 255, 0.18)',
          border: 'rgba(255, 255, 255, 0.15)',
        },
        
        // Text Colors
        text: {
          primary: '#ffffff',
          secondary: 'rgba(255, 255, 255, 0.75)',
          tertiary: 'rgba(255, 255, 255, 0.5)',
          muted: 'rgba(255, 255, 255, 0.35)',
        },
      },
      
      // ─────────────────────────────────────────────────────────
      // TYPOGRAPHY - Clean Modern Sans-Serif
      // ─────────────────────────────────────────────────────────
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      
      fontSize: {
        'xxs': ['0.625rem', { lineHeight: '0.875rem' }],  // 10px
        'xs': ['0.75rem', { lineHeight: '1rem' }],        // 12px
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],    // 14px
        'base': ['1rem', { lineHeight: '1.5rem' }],       // 16px
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],    // 18px
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],     // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }],        // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],   // 30px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],     // 36px
        '5xl': ['3rem', { lineHeight: '1.15' }],          // 48px
      },
      
      // ─────────────────────────────────────────────────────────
      // SPACING
      // ─────────────────────────────────────────────────────────
      spacing: {
        '18': '4.5rem',   // 72px
        '22': '5.5rem',   // 88px
        '30': '7.5rem',   // 120px
        '34': '8.5rem',   // 136px
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-top': 'env(safe-area-inset-top)',
      },
      
      // ─────────────────────────────────────────────────────────
      // BORDER RADIUS - Large Rounded Corners
      // ─────────────────────────────────────────────────────────
      borderRadius: {
        'xl': '1rem',      // 16px
        '2xl': '1.25rem',  // 20px
        '3xl': '1.5rem',   // 24px
        '4xl': '2rem',     // 32px
        '5xl': '2.5rem',   // 40px
      },
      
      // ─────────────────────────────────────────────────────────
      // BOX SHADOW - Glow Effects
      // ─────────────────────────────────────────────────────────
      boxShadow: {
        'glow-sm': '0 0 10px rgba(102, 126, 234, 0.3)',
        'glow-md': '0 0 20px rgba(102, 126, 234, 0.4)',
        'glow-lg': '0 0 30px rgba(102, 126, 234, 0.5)',
        'glow-xl': '0 0 40px rgba(102, 126, 234, 0.6)',
        'glow-cyan': '0 0 20px rgba(0, 245, 255, 0.4)',
        'glow-purple': '0 0 20px rgba(191, 0, 255, 0.4)',
        'glow-pink': '0 0 20px rgba(255, 107, 157, 0.4)',
        'inner-glow': 'inset 0 0 20px rgba(102, 126, 234, 0.2)',
        'card': '0 8px 32px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 12px 48px rgba(0, 0, 0, 0.5)',
      },
      
      // ─────────────────────────────────────────────────────────
      // BACKGROUND IMAGE - Gradients
      // ─────────────────────────────────────────────────────────
      backgroundImage: {
        // Main Cosmic Gradient
        'cosmic-gradient': 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #16213e 100%)',
        
        // Purple to Blue Gradient
        'mystic-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        
        // Glass Card Gradient
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        
        // Button Gradients
        'button-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'button-secondary': 'linear-gradient(135deg, #4a7bc4 0%, #667eea 100%)',
        'button-success': 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
        
        // Border Gradients
        'border-gradient': 'linear-gradient(135deg, rgba(102,126,234,0.5) 0%, rgba(118,75,162,0.5) 100%)',
        
        // Radial Glows
        'radial-glow': 'radial-gradient(circle at center, rgba(102,126,234,0.15) 0%, transparent 70%)',
        'radial-glow-purple': 'radial-gradient(circle at center, rgba(118,75,162,0.15) 0%, transparent 70%)',
      },
      
      // ─────────────────────────────────────────────────────────
      // BACKDROP BLUR - Glassmorphism
      // ─────────────────────────────────────────────────────────
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
        '3xl': '40px',
      },
      
      // ─────────────────────────────────────────────────────────
      // ANIMATIONS - Smooth Transitions
      // ─────────────────────────────────────────────────────────
      animation: {
        // Fade Animations
        'fade-in': 'fadeIn 0.3s ease-out',
        'fade-out': 'fadeOut 0.3s ease-out',
        'fade-in-up': 'fadeInUp 0.4s ease-out',
        'fade-in-down': 'fadeInDown 0.4s ease-out',
        
        // Slide Animations
        'slide-in-left': 'slideInLeft 0.3s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'slide-in-up': 'slideInUp 0.3s ease-out',
        'slide-in-down': 'slideInDown 0.3s ease-out',
        'slide-out-left': 'slideOutLeft 0.3s ease-out',
        'slide-out-right': 'slideOutRight 0.3s ease-out',
        
        // Scale Animations
        'scale-in': 'scaleIn 0.3s ease-out',
        'scale-out': 'scaleOut 0.3s ease-out',
        
        // Glow Pulse
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'glow-pulse-fast': 'glowPulse 1s ease-in-out infinite',
        
        // Float Animation
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        
        // Spin Slow (for icons)
        'spin-slow': 'spin 3s linear infinite',
        
        // Pulse Glow
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        
        // Shimmer (loading effect)
        'shimmer': 'shimmer 2s linear infinite',
        
        // Card Flip
        'flip-in': 'flipIn 0.6s ease-out',
        'flip-out': 'flipOut 0.6s ease-out',
        
        // Bounce Subtle
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
        
        // Star Twinkle
        'twinkle': 'twinkle 3s ease-in-out infinite',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInUp: {
          '0%': { opacity: '0', transform: 'translateY(100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInDown: {
          '0%': { opacity: '0', transform: 'translateY(-100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideOutLeft: {
          '0%': { opacity: '1', transform: 'translateX(0)' },
          '100%': { opacity: '0', transform: 'translateX(-100%)' },
        },
        slideOutRight: {
          '0%': { opacity: '1', transform: 'translateX(0)' },
          '100%': { opacity: '0', transform: 'translateX(100%)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        scaleOut: {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0.9)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(102, 126, 234, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(102, 126, 234, 0.7)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
          '50%': { opacity: '0.8', filter: 'brightness(1.2)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        flipIn: {
          '0%': { transform: 'perspective(400px) rotateY(90deg)', opacity: '0' },
          '40%': { transform: 'perspective(400px) rotateY(-10deg)' },
          '70%': { transform: 'perspective(400px) rotateY(5deg)' },
          '100%': { transform: 'perspective(400px) rotateY(0deg)', opacity: '1' },
        },
        flipOut: {
          '0%': { transform: 'perspective(400px) rotateY(0deg)', opacity: '1' },
          '100%': { transform: 'perspective(400px) rotateY(90deg)', opacity: '0' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.1)' },
        },
      },
      
      // ─────────────────────────────────────────────────────────
      // TRANSITION DURATION
      // ─────────────────────────────────────────────────────────
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '900': '900ms',
      },
      
      // ─────────────────────────────────────────────────────────
      // Z-INDEX
      // ─────────────────────────────────────────────────────────
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
        'modal': '1000',
        'toast': '1100',
        'tooltip': '1200',
      },
      
      // ─────────────────────────────────────────────────────────
      // MIN/MAX HEIGHT
      // ─────────────────────────────────────────────────────────
      minHeight: {
        'screen-safe': 'calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom))',
        'dvh': '100dvh',
      },
      
      height: {
        'screen-safe': 'calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom))',
        'dvh': '100dvh',
      },
    },
  },
  plugins: [],
};
