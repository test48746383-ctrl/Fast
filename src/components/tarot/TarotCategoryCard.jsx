import React from 'react';
import { motion } from 'framer-motion';

const TarotCategoryCard = ({ data, index, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      whileTap={{ scale: 0.98 }}
      className="w-full flex items-center p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors text-left group"
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-mystic-500/20 to-celestial-500/20 flex items-center justify-center text-2xl mr-4 group-hover:scale-110 transition-transform">
        {data.icon}
      </div>
      <div>
        <h3 className="text-white font-bold">{data.title}</h3>
        <p className="text-white/50 text-xs">{data.desc}</p>
      </div>
      <div className="ml-auto text-white/20">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </div>
    </motion.button>
  );
};

export default TarotCategoryCard;
