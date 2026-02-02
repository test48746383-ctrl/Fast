import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useNavigation } from '../../context/NavigationContext';
import { aiService } from '../../services/aiService';
import { drawCards } from '../../data/tarotDeck';
import { useUser } from '../../context/UserContext';
import { useToast } from '../../hooks/useToast';
import Header from '../common/Header';
import TarotCategories from './TarotCategories';
import TarotSpread from './TarotSpread';
import TarotResult from './TarotResult';

const TarotReading = () => {
  const [step, setStep] = useState('category'); // category, shuffle, spread, result
  const [category, setCategory] = useState(null);
  const [drawnCards, setDrawnCards] = useState([]);
  const [reading, setReading] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { userProfile } = useUser();
  const toast = useToast();

  const handleCategorySelect = (cat) => {
    setCategory(cat);
    setStep('spread');
  };

  const handleCardsDrawn = async () => {
    // Draw 3 cards for Past/Present/Future or Situation/Action/Outcome
    const cards = drawCards(3);
    setDrawnCards(cards);
    
    // Animate reveal first, then fetch AI
    setIsLoading(true);
    setStep('result');

    try {
      const cardNames = cards.map(c => c.name);
      const aiResponse = await aiService.getTarotReading(cardNames, category, userProfile);
      setReading(aiResponse);
    } catch (error) {
      console.error(error);
      toast.error("The spirits are quiet... please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cosmic-900 pb-safe-bottom">
      <Header title="Tarot Reading" showBack={step !== 'result'} />

      <AnimatePresence mode="wait">
        {step === 'category' && (
          <TarotCategories key="categories" onSelect={handleCategorySelect} />
        )}

        {step === 'spread' && (
          <TarotSpread 
            key="spread" 
            category={category} 
            onCardsDrawn={handleCardsDrawn} 
          />
        )}

        {step === 'result' && (
          <TarotResult 
            key="result"
            cards={drawnCards}
            reading={reading}
            isLoading={isLoading}
            onReset={() => setStep('category')}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default TarotReading;
