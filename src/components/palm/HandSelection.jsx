import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';

const HandSelection = ({ onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="p-6 pt-24 h-full flex flex-col items-center text-center"
    >
      <h2 className="text-2xl font-bold text-white mb-2">Which hand?</h2>
      <p className="text-white/60 mb-12 max-w-xs">
        Typically, the dominant hand represents your present and future, while the other represents potential.
      </p>

      <div className="w-full grid grid-cols-2 gap-6 mb-12">
        <button
          onClick={() => onSelect('left')}
          className="aspect-[3/4] rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-celestial-400 transition-all flex flex-col items-center justify-center gap-4 group"
        >
          <div className="text-6xl group-hover:scale-110 transition-transform">✋</div>
          <span className="font-semibold text-white">Left Hand</span>
        </button>

        <button
          onClick={() => onSelect('right')}
          className="aspect-[3/4] rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-celestial-400 transition-all flex flex-col items-center justify-center gap-4 group"
        >
          <div className="text-6xl scale-x-[-1] group-hover:scale-x-[-1] group-hover:scale-110 transition-transform">✋</div>
          <span className="font-semibold text-white">Right Hand</span>
        </button>
      </div>
    </motion.div>
  );
};

export default HandSelection;
