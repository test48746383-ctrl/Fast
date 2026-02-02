import React from 'react';
import { motion } from 'framer-motion';

/**
 * 🔘 Universal Button Component
 * 
 * Variants:
 * - primary: Gradient Purple/Blue
 * - secondary: Glass/Outline
 * - ghost: Text only
 */
const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '', 
  disabled = false,
  isLoading = false,
  type = 'button'
}) => {
  const baseStyles = "relative w-full py-4 rounded-2xl font-semibold text-white tracking-wide transition-all duration-300 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-button-primary shadow-glow-md hover:shadow-glow-lg active:scale-[0.98]",
    secondary: "bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 active:scale-[0.98]",
    ghost: "bg-transparent hover:bg-white/5 active:scale-[0.98]",
    icon: "w-12 h-12 p-0 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20"
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {/* Loading Spinner */}
      {isLoading ? (
        <div className="flex items-center justify-center">
          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      ) : (
        children
      )}
      
      {/* Shine Effect for Primary */}
      {variant === 'primary' && !disabled && (
        <div className="absolute inset-0 -translate-x-full hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
      )}
    </motion.button>
  );
};

export default Button;
