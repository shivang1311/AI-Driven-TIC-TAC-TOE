import React from 'react';
import { RotateCcw } from 'lucide-react';
import { Theme } from '../types';

interface NewGameButtonProps {
  onClick: () => void;
  theme: Theme;
}

const NewGameButton: React.FC<NewGameButtonProps> = ({ onClick, theme }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full py-4 px-6 rounded-xl
        font-semibold flex items-center justify-center gap-2
        transition-all duration-300 ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
            : 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white shadow-lg'
        }`}
    >
      <RotateCcw className="w-5 h-5" />
      New Game
    </button>
  );
};

export default NewGameButton;