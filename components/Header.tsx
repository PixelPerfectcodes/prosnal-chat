
import React from 'react';
import { GirlfriendIcon } from './IconComponents';

const Header: React.FC = () => {
  return (
    <header className="flex items-center p-4 bg-slate-900 text-white shadow-md z-10">
      <div className="w-12 h-12 bg-fuchsia-500 rounded-full flex items-center justify-center mr-4">
        <GirlfriendIcon />
      </div>
      <div>
        <h1 className="text-xl font-bold">Aarya</h1>
        <p className="text-sm text-green-400">Online</p>
      </div>
    </header>
  );
};

export default Header;
