import React from 'react';
import { Message } from '../types';
import { GirlfriendIcon, UserIcon, KissIcon, WinkHeartIcon, SpicyIcon, BlushIcon } from './IconComponents';

interface MessageBubbleProps {
  message: Message;
}

const emojiMap: { [key: string]: React.ReactNode } = {
  '[kiss]': <KissIcon />,
  '[wink-heart]': <WinkHeartIcon />,
  '[spicy]': <SpicyIcon />,
  '[blush]': <BlushIcon />,
};

const renderMessageWithEmojis = (text: string) => {
  const regex = /(\[kiss\]|\[wink-heart\]|\[spicy\]|\[blush\])/g;
  
  if (!text) return null;

  const parts = text.split(regex);

  return parts.map((part, index) => {
    if (emojiMap[part]) {
      return (
        <span key={index} className="inline-block w-5 h-5 align-text-bottom mx-0.5">
          {emojiMap[part]}
        </span>
      );
    }
    return part;
  });
};

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.sender === 'user';

  const bubbleStyles = isUser
    ? 'bg-blue-500 text-white self-end'
    : 'bg-slate-700 text-white self-start';

  const containerStyles = isUser ? 'flex-row-reverse' : 'flex-row';

  return (
    <div className={`flex items-end gap-3 max-w-md ${containerStyles} ${isUser ? 'ml-auto' : 'mr-auto'}`}>
       <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center ${isUser ? 'bg-slate-600' : 'bg-fuchsia-500'}`}>
        {isUser ? <UserIcon /> : <GirlfriendIcon />}
      </div>
      <div className={`p-4 rounded-2xl ${bubbleStyles} ${isUser ? 'rounded-br-none' : 'rounded-bl-none'}`}>
        <p className="text-base break-words">
          {isUser ? message.text : renderMessageWithEmojis(message.text)}
        </p>
      </div>
    </div>
  );
};

export default MessageBubble;