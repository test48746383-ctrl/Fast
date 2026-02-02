import React from 'react';
// A purely decorative background component for the horoscope page
const ZodiacWheel = () => {
  return (
    <div className="absolute top-0 right-0 opacity-10 pointer-events-none translate-x-1/3 -translate-y-1/4">
       <div className="w-96 h-96 rounded-full border-2 border-dashed border-white animate-spin-slow flex items-center justify-center">
          <div className="w-64 h-64 rounded-full border border-white" />
       </div>
    </div>
  );
};

export default ZodiacWheel;
