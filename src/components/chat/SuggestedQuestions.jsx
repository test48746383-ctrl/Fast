import React from 'react';
import { motion } from 'framer-motion';

const QUESTIONS = [
  "What does my Life Line say?",
  "Will I find love soon?",
  "What is my career path?",
  "Tell me about my lucky colors."
];

const SuggestedQuestions = ({ onSelect }) => {
  return (
    <div className="mt-8">
      <p className="text-white/40 text-xs uppercase tracking-widest mb-4 px-2">Suggested</p>
      <div className="flex flex-col gap-2">
        {QUESTIONS.map((q, i) => (
          <motion.button
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            onClick={() => onSelect(q)}
            className="text-left p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-sm text-white/80 transition-colors"
          >
            {q}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default SuggestedQuestions;
