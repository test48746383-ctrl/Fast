import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * 🔄 Screen Transition Wrapper
 * 
 * Wraps page content to provide smooth entering/exiting animations.
 * Uses Framer Motion for high-performance GPU animations.
 */
const ScreenTransition = ({ children, className = "" }) => {
  // Animation Variants
  const variants = {
    initial: { 
      opacity: 0, 
      scale: 0.98,
      y: 10 
    },
    animate: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1.0] // Ease-out-cubic
      }
    },
    exit: { 
      opacity: 0, 
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      className={`w-full h-full ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default ScreenTransition;
