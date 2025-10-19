
import React from 'react';
import { SendIcon } from './IconComponents';

interface ChatInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ value, onChange, onSubmit, isLoading }) => {
  return (
    <div className="p-4 bg-slate-900">
      <form onSubmit={onSubmit} className="flex items-center space-x-4">
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={isLoading ? "Aarya is thinking..." : "Type a message..."}
          disabled={isLoading}
          className="flex-1 p-3 bg-slate-700 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition duration-300"
          autoComplete="off"
        />
        <button
          type="submit"
          disabled={isLoading || !value.trim()}
          className="w-12 h-12 bg-fuchsia-500 text-white rounded-full flex items-center justify-center transition duration-300 hover:bg-fuchsia-600 disabled:bg-slate-600 disabled:cursor-not-allowed transform hover:scale-110"
        >
          <SendIcon />
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
