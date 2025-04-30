import React from 'react';
import { Theme } from '../types';

interface GameStatsProps {
  stats: {
    wins: number;
    draws: number;
    losses: number;
  };
  theme: Theme;
  gameMode: string;
}

const GameStats: React.FC<GameStatsProps> = ({ stats, theme, gameMode }) => {
  if (gameMode === 'PVP') return null;

  return (
    <div className={`grid grid-cols-3 gap-4 mb-6 p-4 rounded-xl ${
      theme === 'dark'
        ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10'
        : 'bg-gradient-to-r from-blue-100/50 to-purple-100/50 shadow-inner'
    }`}>
      <div className="text-center">
        <div className="text-2xl font-bold text-green-500 drop-shadow-md">{stats.wins}</div>
        <div className="text-sm opacity-80">Wins</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-yellow-500 drop-shadow-md">{stats.draws}</div>
        <div className="text-sm opacity-80">Draws</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-red-500 drop-shadow-md">{stats.losses}</div>
        <div className="text-sm opacity-80">Losses</div>
      </div>
    </div>
  );
};

export default GameStats;