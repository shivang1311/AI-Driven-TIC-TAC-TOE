import React from 'react';
import { Users, Cpu, Brain } from 'lucide-react';
import { GameMode, Theme } from '../types';

interface GameControlsProps {
  gameMode: GameMode;
  setGameMode: (mode: GameMode) => void;
  resetGame: () => void;
  theme: Theme;
}

const GameControls: React.FC<GameControlsProps> = ({
  gameMode,
  setGameMode,
  resetGame,
  theme,
}) => {
  const handleModeChange = (mode: GameMode) => {
    setGameMode(mode);
    resetGame();
  };

  return (
    <div className="grid grid-cols-3 gap-3 mb-6">
      <button
        onClick={() => handleModeChange('PVP')}
        className={`flex items-center justify-center gap-2 p-3 rounded-xl transition-all duration-300 ${
          gameMode === 'PVP'
            ? theme === 'dark' 
              ? 'bg-blue-600 hover:bg-blue-700' 
              : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg'
            : theme === 'dark' 
              ? 'bg-gray-700/50 hover:bg-gray-600/50' 
              : 'bg-white/50 hover:bg-white/70 shadow-md'
        }`}
      >
        <Users className="w-5 h-5" />
        <span className="text-sm font-semibold">PVP</span>
      </button>
      <button
        onClick={() => handleModeChange('AI_EASY')}
        className={`flex items-center justify-center gap-2 p-3 rounded-xl transition-all duration-300 ${
          gameMode === 'AI_EASY'
            ? theme === 'dark' 
              ? 'bg-blue-600 hover:bg-blue-700' 
              : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg'
            : theme === 'dark' 
              ? 'bg-gray-700/50 hover:bg-gray-600/50' 
              : 'bg-white/50 hover:bg-white/70 shadow-md'
        }`}
      >
        <Cpu className="w-5 h-5" />
        <span className="text-sm font-semibold">Easy AI</span>
      </button>
      <button
        onClick={() => handleModeChange('AI_HARD')}
        className={`flex items-center justify-center gap-2 p-3 rounded-xl transition-all duration-300 ${
          gameMode === 'AI_HARD'
            ? theme === 'dark' 
              ? 'bg-blue-600 hover:bg-blue-700' 
              : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg'
            : theme === 'dark' 
              ? 'bg-gray-700/50 hover:bg-gray-600/50' 
              : 'bg-white/50 hover:bg-white/70 shadow-md'
        }`}
      >
        <Brain className="w-5 h-5" />
        <span className="text-sm font-semibold">Hard AI</span>
      </button>
    </div>
  );
};

export default GameControls;