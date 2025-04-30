import React from 'react';
import { Palette } from 'lucide-react';
import { Theme } from '../types';
import { themes } from '../constants';

interface ThemeSelectorProps {
  currentTheme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ currentTheme, setTheme }) => {
  return (
    <div className="relative group">
      <button
        className={`p-3 rounded-xl transition-all duration-300 ${
          currentTheme === 'dark' 
            ? 'bg-gray-700/50 hover:bg-gray-600/50' 
            : 'bg-white/50 hover:bg-white/70 shadow-lg'
        }`}
      >
        <Palette className="w-6 h-6" />
      </button>
      
      <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        {(Object.keys(themes) as Theme[]).map((theme) => (
          <button
            key={theme}
            onClick={() => setTheme(theme)}
            className={`w-full px-4 py-2 text-left hover:bg-gray-100 capitalize
              ${currentTheme === theme ? 'bg-gray-50 font-semibold' : ''}`}
          >
            {theme}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;