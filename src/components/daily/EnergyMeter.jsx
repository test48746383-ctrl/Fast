import React from 'react';

const EnergyMeter = ({ level = 80 }) => {
  return (
    <div className="w-full mt-2">
      <div className="flex justify-between text-xs text-white/40 mb-1">
         <span>Low Energy</span>
         <span>High Energy</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-red-400 via-yellow-400 to-green-400"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
};

export default EnergyMeter;
