import React from 'react';
import { GitPullRequest, Sun, Moon, Info } from 'lucide-react';
import { Theme } from '../types';

interface HeaderProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  setShowAuthorInfo: (show: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ theme, setTheme, setShowAuthorInfo }) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <div className="flex items-center gap-3">
        <GitPullRequest className={`w-8 h-8 ${
          theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
        } drop-shadow-md animate-float`} />
        <h1 className={`text-4xl font-bold ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-blue-400 to-purple-500'
            : 'bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500'
        } bg-clip-text text-transparent drop-shadow-sm`}>
          Tic Tac Toe
        </h1>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => setShowAuthorInfo(true)}
          className={`p-3 rounded-xl transition-all duration-300 ${
            theme === 'dark' 
              ? 'bg-gray-700/50 hover:bg-gray-600/50' 
              : 'bg-white/50 hover:bg-white/70 shadow-lg'
          }`}
        >
          <Info className="w-6 h-6" />
        </button>
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className={`p-3 rounded-xl transition-all duration-300 ${
            theme === 'dark' 
              ? 'bg-gray-700/50 hover:bg-gray-600/50' 
              : 'bg-white/50 hover:bg-white/70 shadow-lg'
          }`}
        >
          {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
      </div>
    </div>
  );
}

export default Header;