import React, { useState } from 'react';
import Header from '../common/Header';
import ZodiacSelector from './ZodiacSelector';
import HoroscopeResult from './HoroscopeResult';
import { ZODIAC_SIGNS } from '../../data/zodiacData';
import { useUser } from '../../context/UserContext';
import { getZodiacSign } from '../../utils/helpers';

const Horoscope = () => {
  const { userProfile } = useUser();
  
  // Default to user sign or Aries
  const getUserSign = () => {
    if (userProfile?.dob) {
       const d = new Date(userProfile.dob);
       return getZodiacSign(d.getDate(), d.getMonth() + 1);
    }
    return 'aries';
  };

  const [selectedSign, setSelectedSign] = useState(getUserSign());

  return (
    <div className="min-h-screen bg-cosmic-900 pb-safe-bottom">
      <Header title="Horoscope" showBack />
      
      <div className="pt-20">
        <ZodiacSelector 
           current={selectedSign} 
           onSelect={setSelectedSign} 
        />
        
        <HoroscopeResult sign={selectedSign} />
      </div>
    </div>
  );
};

export default Horoscope;
