import { apiClient } from './apiClient';
import { SYSTEM_PROMPTS } from '../utils/prompts';

const TEXT_MODEL = import.meta.env.VITE_TEXT_MODEL || 'liquid/lfm-7b';

/**
 * 🤖 AI Service
 * 
 * Handles all text-based AI interactions:
 * - Tarot readings
 * - Horoscopes
 * - Chat
 */

export const aiService = {
  /**
   * Get Tarot Reading
   */
  getTarotReading: async (cards, category, userContext) => {
    const prompt = SYSTEM_PROMPTS.TAROT_READING
      .replace('{CARDS}', cards.join(', '))
      .replace('{CATEGORY}', category);

    const userDetails = userContext ? `User is ${userContext.name}, ${userContext.gender}, born on ${userContext.dob}.` : '';

    return apiClient.post('/chat/completions', {
      model: TEXT_MODEL,
      messages: [
        { role: 'system', content: prompt },
        { role: 'user', content: `${userDetails} Please interpret these cards for me.` }
      ],
      temperature: 0.7
    });
  },

  /**
   * Get Daily Horoscope
   */
  getHoroscope: async (zodiacSign, date) => {
    const prompt = SYSTEM_PROMPTS.HOROSCOPE
      .replace('{ZODIAC}', zodiacSign)
      .replace('{DATE}', date);

    return apiClient.post('/chat/completions', {
      model: TEXT_MODEL,
      messages: [
        { role: 'system', content: prompt },
        { role: 'user', content: "Reveal my energy for today." }
      ],
      response_format: { type: "json_object" }
    });
  },

  /**
   * Chat with AI
   */
  chat: async (message, history = []) => {
    const messages = [
      { role: 'system', content: SYSTEM_PROMPTS.CHAT_PERSONA },
      ...history,
      { role: 'user', content: message }
    ];

    return apiClient.post('/chat/completions', {
      model: TEXT_MODEL,
      messages,
      temperature: 0.8
    });
  }
};
