import React from 'react';

const LuckyElement = ({ label, value, color }) => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center text-center">
      <span className="text-xs text-white/40 uppercase tracking-widest mb-1">{label}</span>
      <span className={`text-lg font-bold ${color || 'text-white'}`}>{value || 'Unknown'}</span>
    </div>
  );
};

export default LuckyElement;
