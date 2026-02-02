import React from 'react';

const Disclaimer = ({ className = '' }) => {
  return (
    <div className={`text-center px-6 py-4 ${className}`}>
      <p className="text-[10px] text-white/30 leading-relaxed uppercase tracking-widest">
        For Entertainment & Spiritual Purposes Only
        <br />
        Not Medical or Legal Advice
      </p>
    </div>
  );
};

export default Disclaimer;
