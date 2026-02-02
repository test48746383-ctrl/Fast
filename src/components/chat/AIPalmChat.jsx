import React, { useState, useRef, useEffect } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { aiService } from '../../services/aiService';
import ChatHeader from './ChatHeader';
import ChatBubble from './ChatBubble';
import ChatInput from './ChatInput';
import TypingIndicator from './TypingIndicator';
import SuggestedQuestions from './SuggestedQuestions';

const AIPalmChat = () => {
  const scrollRef = useRef(null);
  
  // Initial Welcome Message
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'system',
      content: "Namaste. I am Astra, your spiritual guide. I can help clarify your readings or offer guidance on love, career, and destiny. What is on your mind?"
    }
  ]);
  
  const [isTyping, setIsTyping] = useState(false);

  const scrollToBottom = () => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async (text) => {
    // Add user message
    const userMsg = { id: Date.now(), role: 'user', content: text };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    try {
      // Prepare history for API (exclude IDs)
      const apiHistory = messages.map(m => ({ role: m.role === 'system' ? 'assistant' : m.role, content: m.content }));
      
      const response = await aiService.chat(text, apiHistory);
      
      const aiMsg = { id: Date.now() + 1, role: 'system', content: response };
      setMessages(prev => [...prev, aiMsg]);
      
    } catch (error) {
      console.error("Chat Error:", error);
      const errorMsg = { id: Date.now() + 1, role: 'system', content: "I sense a disturbance in the connection. Please ask again." };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-cosmic-900 pb-safe-bottom">
      <ChatHeader />
      
      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto px-4 pt-20 pb-4 scrollbar-hide">
        {messages.map((msg) => (
          <ChatBubble key={msg.id} role={msg.role} content={msg.content} />
        ))}
        
        {isTyping && <TypingIndicator />}
        
        <div ref={scrollRef} />
        
        {/* Suggestions only if chat is short */}
        {messages.length < 3 && !isTyping && (
           <SuggestedQuestions onSelect={handleSendMessage} />
        )}
      </div>

      {/* Input Area */}
      <ChatInput onSend={handleSendMessage} disabled={isTyping} />
    </div>
  );
};

export default AIPalmChat;
