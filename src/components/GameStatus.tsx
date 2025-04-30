import React from 'react';
import { X, Circle, Trophy } from 'lucide-react';
import { Player, Theme } from '../types';

interface GameStatusProps {
  winner: Player | 'Draw' | null;
  currentPlayer: Player;
  isAIThinking: boolean;
  theme: Theme;
}

const GameStatus: React.FC<GameStatusProps> = ({
  winner,
  currentPlayer,
  isAIThinking,
  theme,
}) => {
  return (
    <div className="text-center mb-6">
      {!winner && (
        <div className="flex items-center justify-center gap-2 animate-fade-in">
          <span className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            {isAIThinking ? 'AI is thinking...' : 'Current Player:'}
          </span>
          {currentPlayer === 'X' ? 
            <X className={`w-6 h-6 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-500'} drop-shadow-md`} /> : 
            <Circle className={`w-6 h-6 ${theme === 'dark' ? 'text-red-400' : 'text-red-500'} drop-shadow-md`} />
          }
        </div>
      )}
      {winner && (
        <div className="text-xl font-semibold animate-scale-in">
          {winner === 'Draw' ? (
            <span className={`${theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'} 
              flex items-center justify-center gap-2 animate-float`}>
              <Trophy className="w-6 h-6 drop-shadow-md" />
              It's a Draw!
            </span>
          ) : (
            <div className="flex items-center justify-center gap-2 animate-celebrate">
              <Trophy className={`w-6 h-6 ${winner === 'X' ? 'text-blue-500' : 'text-red-500'} 
                drop-shadow-md animate-float`} />
              <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>Winner:</span>
              {winner === 'X' ? 
                <X className={`w-6 h-6 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-500'} 
                  drop-shadow-md animate-float`} /> : 
                <Circle className={`w-6 h-6 ${theme === 'dark' ? 'text-red-400' : 'text-red-500'} 
                  drop-shadow-md animate-float`} />
              }
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GameStatus;