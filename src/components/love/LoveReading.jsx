import React, { useState } from 'react';
import Header from '../common/Header';
import ZodiacSelector from '../horoscope/ZodiacSelector';
import Button from '../common/Button';
import LoveResult from './LoveResult';

const LoveReading = () => {
  const [sign1, setSign1] = useState('aries');
  const [sign2, setSign2] = useState('leo');
  const [showResult, setShowResult] = useState(false);

  return (
    <div className="min-h-screen bg-cosmic-900 pb-safe-bottom">
      <Header title="Love Compatibility" showBack />
      
      {!showResult ? (
        <div className="pt-20 px-6">
          <h3 className="text-white font-bold mb-4">Your Sign</h3>
          <ZodiacSelector current={sign1} onSelect={setSign1} />
          
          <h3 className="text-white font-bold mb-4 mt-8">Partner's Sign</h3>
          <ZodiacSelector current={sign2} onSelect={setSign2} />
          
          <div className="mt-12">
            <Button onClick={() => setShowResult(true)}>
               Analyze Compatibility
            </Button>
          </div>
        </div>
      ) : (
        <LoveResult 
           sign1={sign1} 
           sign2={sign2} 
           onReset={() => setShowResult(false)} 
        />
      )}
    </div>
  );
};

export default LoveReading;
