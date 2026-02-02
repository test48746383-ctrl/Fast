import React from 'react';
import { ZODIAC_SIGNS } from '../../data/zodiacData';

const ZodiacSelector = ({ current, onSelect }) => {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide px-4 mb-6">
      <div className="flex gap-3 w-max">
        {ZODIAC_SIGNS.map((z) => (
          <button
            key={z.id}
            onClick={() => onSelect(z.id)}
            className={`
              flex flex-col items-center justify-center w-20 h-24 rounded-2xl border transition-all
              ${current === z.id 
                ? 'bg-white/10 border-celestial-400 scale-105 shadow-glow-sm' 
                : 'bg-white/5 border-transparent opacity-60 hover:opacity-100'}
            `}
          >
            <span className="text-3xl mb-1">{z.symbol}</span>
            <span className="text-xs font-medium text-white capitalize">{z.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ZodiacSelector;
