import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigation } from '../../context/NavigationContext';
import { aiService } from '../../services/aiService';
import { useUser } from '../../context/UserContext';
import { getZodiacSign } from '../../utils/helpers';
import Header from '../common/Header';
import GuidanceCard from './GuidanceCard';
import LuckyElement from './LuckyElement';
import Loading from '../common/Loading';

const DailyGuidance = ({ previewMode = false }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { userProfile } = useUser();
  const { navigate } = useNavigation();

  useEffect(() => {
    const fetchDaily = async () => {
      // Check cache first (session storage for simplicity per session)
      const cached = sessionStorage.getItem('daily_guidance');
      if (cached) {
        setData(JSON.parse(cached));
        setLoading(false);
        return;
      }

      // If no profile, use generic Aries
      const dob = userProfile?.dob ? new Date(userProfile.dob) : new Date();
      const sign = getZodiacSign(dob.getDate(), dob.getMonth() + 1);

      try {
        const result = await aiService.getHoroscope(sign, new Date().toDateString());
        // Parse if string
        const parsed = typeof result === 'string' ? JSON.parse(result) : result;
        setData(parsed);
        sessionStorage.setItem('daily_guidance', JSON.stringify(parsed));
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchDaily();
  }, [userProfile]);

  if (previewMode) {
    if (loading) return <div className="h-32 bg-white/5 rounded-2xl animate-pulse" />;
    return (
      <div className="bg-gradient-to-r from-violet-900/50 to-fuchsia-900/50 border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:border-white/20 transition-all cursor-pointer">
        <div className="absolute top-0 right-0 p-4 opacity-50 text-4xl">✨</div>
        <h3 className="text-white font-bold mb-1">Daily Insight</h3>
        <p className="text-white/70 text-sm line-clamp-2">{data?.message}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cosmic-900 pb-safe-bottom">
      <Header title="Daily Guidance" showBack />

      <div className="pt-20 px-6">
        {loading ? (
          <Loading />
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-6"
          >
            {/* Main Message Card */}
            <GuidanceCard 
              title="Today's Energy" 
              content={data?.message} 
              icon="⚡"
              highlight
            />

            {/* Lucky Elements Grid */}
            <div className="grid grid-cols-2 gap-4">
               <LuckyElement label="Mood" value={data?.mood} color="text-yellow-300" />
               <LuckyElement label="Color" value={data?.lucky_color} color="text-pink-300" />
               <LuckyElement label="Number" value={data?.lucky_number} color="text-cyan-300" />
               <LuckyElement label="Sign" value="Compatible" color="text-green-300" />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default DailyGuidance;
