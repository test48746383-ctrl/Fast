import React from 'react';

const LanguageOption = ({ code, label, subLabel, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full p-4 rounded-2xl border transition-all duration-300 relative overflow-hidden group
        ${isSelected 
          ? 'bg-mystic-600/20 border-mystic-400 shadow-[0_0_15px_rgba(118,75,162,0.3)]' 
          : 'bg-white/5 border-white/10 hover:bg-white/10'
        }
      `}
    >
      <div className="relative z-10 flex flex-col items-center">
        <span className="text-2xl mb-1">{getFlag(code)}</span>
        <span className={`font-semibold ${isSelected ? 'text-white' : 'text-white/80'}`}>
          {label}
        </span>
        <span className="text-xs text-white/40 mt-1">{subLabel}</span>
      </div>

      {/* Selected Indicator Background */}
      {isSelected && (
        <div className="absolute inset-0 bg-gradient-to-br from-mystic-500/20 to-transparent z-0" />
      )}
    </button>
  );
};

const getFlag = (code) => {
  const flags = {
    en: '🇺🇸',
    hi: '🇮🇳',
    es: '🇪🇸',
    fr: '🇫🇷',
    it: '🇮🇹',
    ko: '🇰🇷'
  };
  return flags[code] || '🌐';
};

export default LanguageOption;
