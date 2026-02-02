import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useNavigation } from '../../context/NavigationContext';
import { visionService } from '../../services/visionService';
import { useToast } from '../../hooks/useToast';
import Header from '../common/Header';
import HandSelection from './HandSelection';
import ScanGuide from './ScanGuide';
import ImageUpload from './ImageUpload';
import ScanningAnimation from './ScanningAnimation';
import PalmResult from './PalmResult';
import Loading from '../common/Loading';

const PalmScan = () => {
  const [step, setStep] = useState('selection'); // selection, guide, upload, scanning, result
  const [hand, setHand] = useState(null); // left, right
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  
  const { goBack } = useNavigation();
  const toast = useToast();

  const handleHandSelect = (selectedHand) => {
    setHand(selectedHand);
    setStep('guide');
  };

  const handleGuideComplete = () => {
    setStep('upload');
  };

  const handleImageSelected = async (file) => {
    setImage(URL.createObjectURL(file));
    setStep('scanning');

    try {
      // Convert file to base64
      const reader = new FileReader();
      reader.readAsDataURL(file);
      
      reader.onloadend = async () => {
        const base64String = reader.result;
        
        // Call AI Service
        try {
          const aiResponse = await visionService.analyzePalm(base64String);
          
          // Parse result (ensure it's valid JSON)
          const parsedResult = typeof aiResponse === 'string' 
            ? JSON.parse(aiResponse) 
            : aiResponse;
            
          setResult(parsedResult);
          
          // Simulate scanning delay for UX (at least 3 seconds)
          setTimeout(() => {
             setStep('result');
          }, 3000);
          
        } catch (error) {
          console.error("AI Analysis Failed:", error);
          toast.error("Could not analyze image. Please try again.");
          setStep('upload');
        }
      };
      
    } catch (err) {
      toast.error("Error processing image");
      setStep('upload');
    }
  };

  return (
    <div className="min-h-screen bg-cosmic-900 pb-safe-bottom">
      {step !== 'scanning' && step !== 'result' && (
        <Header title="Palm Reader" showBack />
      )}

      <AnimatePresence mode="wait">
        {step === 'selection' && (
          <HandSelection key="select" onSelect={handleHandSelect} />
        )}
        
        {step === 'guide' && (
          <ScanGuide key="guide" onContinue={handleGuideComplete} />
        )}
        
        {step === 'upload' && (
          <ImageUpload key="upload" onImageSelect={handleImageSelected} />
        )}
        
        {step === 'scanning' && (
          <ScanningAnimation key="scanning" image={image} />
        )}
        
        {step === 'result' && result && (
          <PalmResult key="result" data={result} image={image} hand={hand} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default PalmScan;
