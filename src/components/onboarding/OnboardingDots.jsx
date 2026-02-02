import React from 'react';
import { motion } from 'framer-motion';

const OnboardingDots = ({ count, current }) => {
  return (
    <div className="flex justify-center gap-2">
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          animate={{
            width: current === index ? 24 : 8,
            backgroundColor: current === index ? '#ffffff' : 'rgba(255,255,255,0.2)'
          }}
          className="h-2 rounded-full"
        />
      ))}
    </div>
  );
};

export default OnboardingDots;
