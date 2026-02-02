import { apiClient } from './apiClient';
import { SYSTEM_PROMPTS } from '../utils/prompts';

const VISION_MODEL = import.meta.env.VITE_VISION_MODEL || 'allenai/molmo-7b-d-0924';

/**
 * 👁️ Vision Service
 * 
 * Handles Image Analysis for Palm Reading.
 */

export const visionService = {
  /**
   * Analyze Palm Image
   * @param {string} base64Image - Base64 encoded image string
   */
  analyzePalm: async (base64Image) => {
    // Ensure base64 header is correct for OpenRouter
    const imageUrl = base64Image.startsWith('data:') 
      ? base64Image 
      : `data:image/jpeg;base64,${base64Image}`;

    return apiClient.post('/chat/completions', {
      model: VISION_MODEL,
      messages: [
        {
          role: 'user',
          content: [
            { type: 'text', text: SYSTEM_PROMPTS.PALM_ANALYSIS },
            { type: 'image_url', image_url: { url: imageUrl } }
          ]
        }
      ],
      response_format: { type: "json_object" }, // Force JSON structure
      temperature: 0.5
    });
  }
};
