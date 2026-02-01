/**
 * 🎨 App Theme Constants
 * 
 * This file mirrors the Tailwind config for use in JavaScript
 * (e.g., Framer Motion variants, Canvas drawing, etc.)
 */

export const theme = {
  colors: {
    background: '#0f0f1a',
    surface: '#1a1a2e',
    surfaceLight: '#252540',
    
    primary: '#667eea',
    secondary: '#764ba2',
    accent: '#4a7bc4',
    
    glow: {
      cyan: '#00f5ff',
      purple: '#bf00ff',
      blue: '#4a7bc4',
    },
    
    text: {
      main: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.75)',
      muted: 'rgba(255, 255, 255, 0.5)',
    },
    
    status: {
      success: '#38ef7d',
      warning: '#f6d365',
      error: '#ff6b6b',
      info: '#4a7bc4',
    }
  },
  
  gradients: {
    cosmic: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #16213e 100%)',
    mystic: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    glass: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
  },
  
  shadows: {
    glow: '0 0 20px rgba(102, 126, 234, 0.4)',
    card: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
  },
  
  borderRadius: {
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  
  animation: {
    spring: {
      type: "spring",
      stiffness: 300,
      damping: 30
    },
    slowSpring: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

export default theme;
