/**
 * 📡 API Client
 * 
 * Centralized Fetch wrapper for OpenRouter API.
 */

const BASE_URL = import.meta.env.VITE_OPENROUTER_BASE_URL || 'https://openrouter.ai/api/v1';
const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

export const apiClient = {
  post: async (endpoint, body) => {
    if (!API_KEY) {
      console.error("⚠️ Missing API Key! Check .env file.");
      throw new Error("API Configuration Error");
    }

    const url = `${BASE_URL}${endpoint.startsWith('/') ? '' : '/'}${endpoint}`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`,
          'HTTP-Referer': window.location.href, // OpenRouter Requirement
          'X-Title': 'AI Palm Reader' // OpenRouter Requirement
        },
        body: JSON.stringify(body)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error?.message || `API Error: ${response.status}`);
      }

      const data = await response.json();
      
      // OpenRouter standard response format structure check
      if (data.choices && data.choices.length > 0) {
        const content = data.choices[0].message.content;
        
        // Auto-parse JSON if requested in prompts
        if (body.response_format?.type === 'json_object') {
            try {
                return JSON.parse(content);
            } catch (e) {
                console.warn("Failed to parse JSON response, returning raw text");
                return content;
            }
        }
        return content;
      }
      
      return data;
    } catch (error) {
      console.error("API Request Failed:", error);
      throw error;
    }
  }
};
