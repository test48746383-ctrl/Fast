import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';

const ImageUpload = ({ onImageSelect }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onImageSelect(file);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="p-6 pt-24 h-full flex flex-col items-center justify-center"
    >
      <input 
        type="file" 
        accept="image/*" 
        className="hidden" 
        ref={fileInputRef}
        onChange={handleFileChange}
      />

      <div className="w-full max-w-sm aspect-[3/4] border-2 border-dashed border-white/30 rounded-3xl flex flex-col items-center justify-center bg-white/5 hover:bg-white/10 transition-colors p-8 text-center">
        <div className="w-20 h-20 rounded-full bg-celestial-500/20 flex items-center justify-center mb-6">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-celestial-300">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="17 8 12 3 7 8"></polyline>
            <line x1="12" y1="3" x2="12" y2="15"></line>
          </svg>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2">Upload Palm Photo</h3>
        <p className="text-white/50 mb-8">Take a photo or choose from gallery</p>
        
        <div className="flex flex-col w-full gap-4">
            <Button onClick={() => fileInputRef.current?.click()} variant="secondary">
              Select Image
            </Button>
            
            {/* Camera Trigger (Mobile Only usually, works via input capture on PWA) */}
            <Button onClick={() => {
                fileInputRef.current.setAttribute("capture", "environment");
                fileInputRef.current.click();
            }}>
              Open Camera
            </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ImageUpload;
