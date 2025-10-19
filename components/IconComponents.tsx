import React from 'react';

export const SendIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
    />
  </svg>
);

export const UserIcon: React.FC = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-6 w-6 text-white" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        fill="none"
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
    </svg>
);

export const GirlfriendIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-white"
        viewBox="0 0 20 20"
        fill="currentColor"
    >
        <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
        />
    </svg>
);

export const KissIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-pink-400">
        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M10 11a.5.5 0 010-1h.01a.5.5 0 010 1H10zM6.5 10.5a.5.5 0 000 1h.01a.5.5 0 000-1H6.5zm7 0a.5.5 0 000 1h.01a.5.5 0 000-1H13.5z" clipRule="evenodd" transform="translate(0, 1)"/>
    </svg>
);

export const WinkHeartIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-pink-400">
    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
    <circle cx="7.5" cy="9.5" r="1" fill="white"/>
    <path d="M11.5 10 H13.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const SpicyIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-red-500">
      <path d="M5.5 13.5c-2-2-2.5-5.5.5-7.5s6-1.5 7.5-.5c1.5 1 1 4.5-1.5 6.5s-5.5 2.5-6.5 1.5z"/>
      <path d="M11 6.5c0-2-1.5-4.5-3.5-4.5S4 4.5 4 6.5"/>
    </svg>
);

export const BlushIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-yellow-400">
    <circle cx="10" cy="10" r="8" />
    <circle cx="7.5" cy="11.5" r="1.5" fill="rgb(251 146 160)" />
    <circle cx="12.5" cy="11.5" r="1.5" fill="rgb(251 146 160)" />
    <path d="M7 9h1M12 9h1" stroke="black" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M8 13.5 q 2 -1.5 4 0" stroke="black" strokeWidth="1" strokeLinecap="round" fill="none" />
  </svg>
);