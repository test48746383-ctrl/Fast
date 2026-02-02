import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';

const ScanGuide = ({ onContinue }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="p-6 pt-24 h-full flex flex-col"
    >
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <div className="w-64 h-64 mb-8 bg-black/30 rounded-3xl border-2 border-dashed border-white/20 flex items-center justify-center relative overflow-hidden">
           <div className="absolute inset-4 border-2 border-white/40 rounded-xl" />
           <span className="text-6xl">📸</span>
           
           {/* Guidelines */}
           <div className="absolute top-1/2 left-0 w-full h-[1px] bg-celestial-400/50" />
           <div className="absolute top-0 left-1/2 h-full w-[1px] bg-celestial-400/50" />
        </div>

        <h2 className="text-xl font-bold text-white mb-6">How to take a photo</h2>
        
        <ul className="text-left space-y-4 text-white/80 max-w-xs mx-auto">
          <li className="flex gap-3 items-center">
            <span className="text-green-400 text-xl">✓</span>
            <span>Use good lighting</span>
          </li>
          <li className="flex gap-3 items-center">
            <span className="text-green-400 text-xl">✓</span>
            <span>Keep hand flat and fingers open</span>
          </li>
          <li className="flex gap-3 items-center">
            <span className="text-green-400 text-xl">✓</span>
            <span>Plain dark background is best</span>
          </li>
          <li className="flex gap-3 items-center">
            <span className="text-red-400 text-xl">✕</span>
            <span>Avoid blur or shadows</span>
          </li>
        </ul>
      </div>

      <div className="pt-8">
        <Button onClick={onContinue}>
          I'm Ready
        </Button>
      </div>
    </motion.div>
  );
};

export default ScanGuide;
