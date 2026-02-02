import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ title, icon, color, onClick, delay = 0 }) => {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay }}
      whileTap={{ scale: 0.95 }}
      className="relative w-full aspect-square rounded-2xl p-4 flex flex-col items-start justify-between overflow-hidden bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-colors group"
    >
      {/* Gradient Background Orb */}
      <div 
        className={`absolute -right-4 -top-4 w-20 h-20 rounded-full blur-[30px] opacity-40 transition-opacity group-hover:opacity-60`}
        style={{ backgroundColor: color }}
      />

      {/* Icon */}
      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl z-10">
        {icon}
      </div>

      {/* Title */}
      <span className="text-left font-medium text-white/90 text-sm leading-tight z-10">
        {title}
      </span>
    </motion.button>
  );
};

export default FeatureCard;
