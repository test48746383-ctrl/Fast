import React, { useEffect, useState } from 'react';
import { aiService } from '../../services/aiService';
import HoroscopeSection from './HoroscopeSection';
import Loading from '../common/Loading';

const HoroscopeResult = ({ sign }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Simulate API or fetch real
    // For MVP, we use simulated delay + mock structure if API fails or real API
    aiService.getHoroscope(sign, new Date().toDateString())
      .then(res => {
         const parsed = typeof res === 'string' ? JSON.parse(res) : res;
         setData(parsed);
      })
      .catch(() => setData(null))
      .finally(() => setLoading(false));
  }, [sign]);

  if (loading) return <Loading />;

  return (
    <div className="px-6 flex flex-col gap-4 pb-24">
       <div className="text-center mb-4">
         <h2 className="text-2xl font-bold text-white capitalize">{sign}</h2>
         <p className="text-white/50">{new Date().toDateString()}</p>
       </div>

       <HoroscopeSection title="General" content={data?.message} icon="✨" />
       
       <div className="grid grid-cols-2 gap-4">
          <HoroscopeSection title="Mood" content={data?.mood} icon="😊" small />
          <HoroscopeSection title="Lucky Color" content={data?.lucky_color} icon="🎨" small />
       </div>
    </div>
  );
};

export default HoroscopeResult;
