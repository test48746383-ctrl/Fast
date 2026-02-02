import React from 'react';

const PalmLogo = ({ size = 100 }) => {
  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Outer Rings */}
      <div className="absolute inset-0 border-2 border-mystic-400/30 rounded-full animate-[spin_10s_linear_infinite]" />
      <div className="absolute inset-2 border border-celestial-400/30 rounded-full animate-[spin_8s_linear_infinite_reverse]" />
      
      {/* Palm Icon */}
      <svg 
        width={size * 0.6} 
        height={size * 0.6} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="url(#gradient)" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f5ff" />
            <stop offset="100%" stopColor="#bf00ff" />
          </linearGradient>
        </defs>
        <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
        <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
        <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
        <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
        
        {/* Glowing Lines */}
        <path d="M12 14c2-2 4-2 4-2" strokeOpacity="0.5" />
        <path d="M11 17c2-1 3-3 3-3" strokeOpacity="0.5" />
      </svg>

      {/* Center Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-celestial-500/20 to-mystic-500/20 rounded-full blur-xl animate-pulse" />
    </div>
  );
};

export default PalmLogo;
