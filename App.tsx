import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Message, Sender } from './types';
import { initializeChat, sendMessageToAI } from './services/geminiService';
import Header from './components/Header';
import MessageBubble from './components/MessageBubble';
import ChatInput from './components/ChatInput';
import { Chat } from '@google/genai';

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'initial-message',
      text: "Hey baby... 😉 I was just thinking about you. Aaj kuch naughty baatein karein? ❤️",
      sender: 'ai',
    }
  ]);
  const [currentMessage, setCurrentMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const chatRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatRef.current = initializeChat();
  }, []);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentMessage.trim() || isLoading || !chatRef.current) return;

    const userMessageText = currentMessage;
    const userMessage: Message = {
      id: Date.now().toString(),
      text: userMessageText,
      sender: 'user',
    };

    const aiMessagePlaceholder: Message = {
      id: (Date.now() + 1).toString(),
      text: '',
      sender: 'ai',
    };

    setMessages(prev => [...prev, userMessage, aiMessagePlaceholder]);
    setCurrentMessage('');
    setIsLoading(true);
    
    try {
      const stream = await sendMessageToAI(chatRef.current, userMessageText);

      for await (const chunk of stream) {
        const chunkText = chunk.text;
        setMessages(prev => {
          const lastMessage = prev[prev.length - 1];
          return [
            ...prev.slice(0, -1),
            { ...lastMessage, text: lastMessage.text + chunkText },
          ];
        });
      }
    } catch (error) {
        console.error("Failed to send message to AI:", error);
        setMessages(prev => {
            const lastMessage = prev[prev.length - 1];
            return [
                ...prev.slice(0, -1),
                { ...lastMessage, text: 'Sorry, my love. I encountered an error. Please try again.' },
            ];
        });
    } finally {
        setIsLoading(false);
    }
  }, [currentMessage, isLoading]);


  return (
    <div className="flex flex-col h-screen max-w-2xl mx-auto bg-slate-800 shadow-2xl rounded-lg my-0 sm:my-4 overflow-hidden">
      <Header />
      <div className="flex-1 p-6 space-y-6 overflow-y-auto">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <ChatInput
        value={currentMessage}
        onChange={(e) => setCurrentMessage(e.target.value)}
        onSubmit={handleSendMessage}
        isLoading={isLoading}
      />
    </div>
  );
};

export default App;