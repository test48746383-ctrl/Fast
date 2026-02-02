import React from 'react';
import { motion } from 'framer-motion';
import { useNavigation } from '../../context/NavigationContext';
import { ROUTES } from '../../router/routes';
import Header from '../common/Header';
import Button from '../common/Button';
import PalmLineCard from './PalmLineCard';
import PalmOverlay from './PalmOverlay';

const PalmResult = ({ data, image }) => {
  const { navigate } = useNavigation();

  return (
    <div className="min-h-screen bg-cosmic-900 pb-safe-bottom overflow-y-auto">
      <Header title="Your Reading" showBack />
      
      <div className="pt-16 pb-32">
        {/* Image Display */}
        <div className="relative w-full aspect-[4/3] bg-black mb-6 overflow-hidden">
          <img src={image} alt="Palm" className="w-full h-full object-cover opacity-70 blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cosmic-900" />
          
          {/* Overlay Lines (Decorative mostly, unless coordinates provided by AI) */}
          <PalmOverlay />
          
          <div className="absolute bottom-4 left-6 right-6">
            <h2 className="text-2xl font-bold text-white">Analysis Complete</h2>
            <p className="text-white/70 text-sm">{data.summary || "Here is your detailed interpretation."}</p>
          </div>
        </div>

        {/* Results Grid */}
        <div className="px-4 flex flex-col gap-4">
          <PalmLineCard 
            title="Heart Line" 
            content={data.heart_line} 
            color="#ff6b9d" 
            delay={0.1} 
          />
          <PalmLineCard 
            title="Head Line" 
            content={data.head_line} 
            color="#4a7bc4" 
            delay={0.2} 
          />
          <PalmLineCard 
            title="Life Line" 
            content={data.life_line} 
            color="#38ef7d" 
            delay={0.3} 
          />
          <PalmLineCard 
            title="Fate Line" 
            content={data.fate_line} 
            color="#f6d365" 
            delay={0.4} 
          />
        </div>

        {/* Chat Upsell */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="px-4 mt-8"
        >
          <div className="p-6 rounded-2xl bg-gradient-to-r from-mystic-900 to-cosmic-800 border border-mystic-500/30 text-center">
             <p className="text-white/90 font-medium mb-4">
               Have questions about this reading?
             </p>
             <Button onClick={() => navigate(ROUTES.CHAT)} variant="secondary">
               Ask AI Assistant
             </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PalmResult;
