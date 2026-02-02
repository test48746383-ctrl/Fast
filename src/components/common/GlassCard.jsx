import React from 'react';
import { motion } from 'framer-motion';

/**
 * 🪟 Glassmorphism Card Wrapper
 * 
 * Reusable card component with glass effect.
 */
const GlassCard = ({ 
  children, 
  className = '', 
  variant = 'default',
  onClick 
}) => {
  const variants = {
    default: "glass-card",
    dark: "glass-card-dark",
    light: "glass-card-light"
  };

  const Component = onClick ? motion.div : 'div';
  const props = onClick ? { whileHover: { scale: 1.01 }, whileTap: { scale: 0.98 }, onClick } : {};

  return (
    <Component
      className={`rounded-3xl p-6 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default GlassCard;
