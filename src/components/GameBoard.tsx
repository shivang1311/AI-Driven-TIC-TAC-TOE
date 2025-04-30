import React from 'react';
import { X, Circle } from 'lucide-react';
import { Player, Theme } from '../types';

interface GameBoardProps {
  board: (Player | null)[];
  handleClick: (index: number) => void;
  winner: Player | 'Draw' | null;
  isAIThinking: boolean;
  theme: Theme;
  winningCells: number[];
}

const GameBoard: React.FC<GameBoardProps> = ({
  board,
  handleClick,
  winner,
  isAIThinking,
  theme,
  winningCells,
}) => {
  const renderCell = (index: number) => {
    const value = board[index];
    const isWinningCell = winner && winningCells.includes(index);
    
    return (
      <button
        onClick={() => handleClick(index)}
        className={`w-full h-full flex items-center justify-center text-4xl font-bold
          cell-hover-effect
          transition-all duration-300 focus:outline-none rounded-xl
          ${theme === 'dark' 
            ? 'hover:bg-gray-700/80 bg-gray-800/90' 
            : 'hover:bg-white/90 bg-white/80 shadow-lg'}
          ${!value && !winner ? 'hover:bg-opacity-90' : ''}
          ${value ? 'animate-scale-in' : ''}
          ${isWinningCell ? 'winning-cell' : ''}`}
        disabled={!!winner || !!value || (isAIThinking && true)}
      >
        {value === 'X' && (
          <X className={`w-12 h-12 
            ${theme === 'dark' ? 'text-blue-400' : 'text-blue-500'} 
            drop-shadow-md
            ${isWinningCell ? 'animate-float' : ''}`} 
          />
        )}
        {value === 'O' && (
          <Circle className={`w-12 h-12 
            ${theme === 'dark' ? 'text-red-400' : 'text-red-500'} 
            drop-shadow-md
            ${isWinningCell ? 'animate-float' : ''}`} 
          />
        )}
      </button>
    );
  };

  return (
    <div className={`grid grid-cols-3 gap-3 p-3 rounded-xl mb-6 game-board-shadow ${
      theme === 'dark' 
        ? 'bg-gray-700/50' 
        : 'bg-white/40 shadow-lg backdrop-blur-sm'
    }`}>
      {Array(9).fill(null).map((_, index) => (
        <div key={index} className="aspect-square">
          {renderCell(index)}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;