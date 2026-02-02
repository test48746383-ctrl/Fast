import React from 'react';
import { motion } from 'framer-motion';

const HeartAnimation = () => {
  return (
    <motion.div 
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
      className="text-6xl mb-4"
    >
      💖
    </motion.div>
  );
};

export default HeartAnimation;
