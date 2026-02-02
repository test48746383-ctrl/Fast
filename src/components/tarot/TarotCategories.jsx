import React from 'react';
import { motion } from 'framer-motion';
import TarotCategoryCard from './TarotCategoryCard';

const CATEGORIES = [
  { id: 'daily', title: "Daily Guidance", icon: "☀️", desc: "Start your day with clarity" },
  { id: 'love', title: "Love & Relationships", icon: "💕", desc: "Heart matters & compatibility" },
  { id: 'career', title: "Career & Wealth", icon: "💼", desc: "Professional path & abundance" },
  { id: 'growth', title: "Personal Growth", icon: "🌱", desc: "Self-discovery & spirituality" },
];

const TarotCategories = ({ onSelect }) => {
  return (
    <div className="pt-20 px-4 pb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl font-bold text-white mb-2">Focus Your Energy</h2>
        <p className="text-white/60 text-sm">Select a topic for the cards to reveal.</p>
      </motion.div>

      <div className="grid gap-4">
        {CATEGORIES.map((cat, i) => (
          <TarotCategoryCard 
            key={cat.id} 
            data={cat} 
            index={i} 
            onClick={() => onSelect(cat.id)} 
          />
        ))}
      </div>
    </div>
  );
};

export default TarotCategories;
