import React from 'react';

/**
 * ✨ Glowing Border Effect Container
 */
const GlowingBorder = ({ children, className = '' }) => {
  return (
    <div className={`relative group ${className}`}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-celestial-400 to-mystic-500 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <div className="relative rounded-2xl bg-cosmic-900 border border-white/10 h-full">
        {children}
      </div>
    </div>
  );
};

export default GlowingBorder;
