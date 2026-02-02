import React from 'react';
import { motion } from 'framer-motion';

const PalmLineCard = ({ title, content, color, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}` }} />
        <h3 className="font-bold text-white text-lg">{title}</h3>
      </div>
      <p className="text-white/80 text-sm leading-relaxed">
        {content}
      </p>
    </motion.div>
  );
};

export default PalmLineCard;
