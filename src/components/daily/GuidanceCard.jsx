import React from 'react';

const GuidanceCard = ({ title, content, icon, highlight }) => {
  return (
    <div className={`
      p-6 rounded-3xl relative overflow-hidden
      ${highlight 
        ? 'bg-gradient-to-br from-indigo-900 via-purple-900 to-cosmic-800 border border-white/20 shadow-glow-md' 
        : 'bg-white/5 border border-white/10'}
    `}>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-white/80 leading-relaxed font-light text-lg">
        {content}
      </p>
    </div>
  );
};

export default GuidanceCard;
