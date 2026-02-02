import React from 'react';

const SettingsItem = ({ label, onClick, toggle, danger }) => {
  return (
    <button 
      onClick={onClick}
      className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors text-left"
    >
      <span className={`font-medium ${danger ? 'text-red-400' : 'text-white'}`}>
        {label}
      </span>
      
      {toggle ? (
        <div className="w-10 h-6 bg-celestial-600 rounded-full relative">
           <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
        </div>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/30">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      )}
    </button>
  );
};

export default SettingsItem;
