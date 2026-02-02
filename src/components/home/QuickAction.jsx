import React from 'react';
import { motion } from 'framer-motion';

const QuickAction = ({ title, subtitle, icon, onClick, variant = 'default' }) => {
  const isGlow = variant === 'glow';

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        w-full relative overflow-hidden rounded-3xl p-6 text-left flex items-center gap-6
        ${isGlow 
          ? 'bg-gradient-to-r from-celestial-900 to-mystic-900 border border-celestial-400/30' 
          : 'bg-white/5 border border-white/10'
        }
      `}
    >
      {/* Background Animation */}
      {isGlow && (
        <div className="absolute inset-0 bg-gradient-to-r from-celestial-500/10 to-mystic-500/10 animate-pulse" />
      )}

      {/* Icon Box */}
      <div className={`
        w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg relative z-10
        ${isGlow ? 'bg-gradient-to-br from-celestial-500 to-mystic-500' : 'bg-white/10'}
      `}>
        {icon}
      </div>

      {/* Text */}
      <div className="flex-1 relative z-10">
        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        <p className="text-white/60 text-sm leading-snug">{subtitle}</p>
      </div>

      {/* Arrow */}
      <div className="text-white/30 relative z-10">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </div>
    </motion.button>
  );
};

export default QuickAction;
