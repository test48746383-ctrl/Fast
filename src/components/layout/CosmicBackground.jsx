import React from 'react';

/**
 * 🌌 Cosmic Background
 * 
 * Creates a deep, mystical layered background with:
 * - Deep gradient base
 * - Radial glows
 * - Subtle animated gradients
 */
const CosmicBackground = () => {
  return (
    <div className="fixed inset-0 z-background pointer-events-none">
      {/* Base Layer: Deep Void */}
      <div className="absolute inset-0 bg-cosmic-900" />
      
      {/* Layer 1: Main Diagonal Gradient */}
      <div className="absolute inset-0 bg-cosmic-gradient opacity-80" />
      
      {/* Layer 2: Top-Left Violet Glow */}
      <div 
        className="absolute top-[-20%] left-[-20%] w-[80%] h-[60%] rounded-full opacity-30 blur-[100px]"
        style={{ background: 'radial-gradient(circle, #764ba2 0%, transparent 70%)' }}
      />
      
      {/* Layer 3: Bottom-Right Blue Glow */}
      <div 
        className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[60%] rounded-full opacity-30 blur-[100px]"
        style={{ background: 'radial-gradient(circle, #4a7bc4 0%, transparent 70%)' }}
      />
      
      {/* Layer 4: Center Mystic Pulse (Subtle) */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[600px] opacity-20 blur-[80px]"
        style={{ background: 'radial-gradient(circle, rgba(102, 126, 234, 0.4) 0%, transparent 60%)' }}
      />
      
      {/* Layer 5: Noise Texture (for realism) */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

export default CosmicBackground;
