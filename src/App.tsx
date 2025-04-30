import React, { useState, useEffect } from 'react';
import { Player, BoardState, GameMode, Theme, AIPersonality } from './types';
import { checkWinner, getEmptyCells, minimax } from './utils/gameLogic';
import { themes, aiPersonalities } from './constants';
import Header from './components/Header';
import GameBoard from './components/GameBoard';
import GameControls from './components/GameControls';
import GameStats from './components/GameStats';
import GameStatus from './components/GameStatus';
import AuthorInfo from './components/AuthorInfo';
import NewGameButton from './components/NewGameButton';
import Confetti from 'react-confetti';

function App() {
  const [board, setBoard] = useState<BoardState>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X');
  const [winner, setWinner] = useState<Player | 'Draw' | null>(null);
  const [gameMode, setGameMode] = useState<GameMode>('PVP');
  const [theme, setTheme] = useState<Theme>('dark');
  const [isAIThinking, setIsAIThinking] = useState(false);
  const [stats, setStats] = useState({ wins: 0, draws: 0, losses: 0 });
  const [winningCells, setWinningCells] = useState<number[]>([]);
  const [showAuthorInfo, setShowAuthorInfo] = useState(false);
  const [aiPersonality, setAIPersonality] = useState<AIPersonality>('balanced');
  const [showConfetti, setShowConfetti] = useState(false);

  // Handle system theme preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(mediaQuery.matches ? 'dark' : 'light');

    const handler = (e: MediaQueryListEvent) => setTheme(e.matches ? 'dark' : 'light');
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Update theme color meta tag when theme changes
  useEffect(() => {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'dark' ? '#1a1a1a' : '#ffffff');
    }
  }, [theme]);

  const getAIMove = (difficulty: 'easy' | 'hard'): number => {
    const emptyCells = getEmptyCells(board);
    const personality = aiPersonalities[aiPersonality];
    
    if (difficulty === 'easy') {
      return emptyCells[Math.floor(Math.random() * emptyCells.length)];
    }
    
    let bestScore = -Infinity;
    let bestMove = emptyCells[0];
    
    for (const cell of emptyCells) {
      const newBoard = [...board];
      newBoard[cell] = 'O';
      const score = minimax(newBoard, 0, false) * (Math.random() * (personality.confidenceRange[1] - personality.confidenceRange[0]) + personality.confidenceRange[0]);
      if (score > bestScore) {
        bestScore = score;
        bestMove = cell;
      }
    }
    
    return bestMove;
  };

  const handleAITurn = async () => {
    if (currentPlayer === 'O' && !winner && gameMode !== 'PVP') {
      setIsAIThinking(true);
      const personality = aiPersonalities[aiPersonality];
      const thinkingTime = Math.random() * (personality.thinkingTimeRange[1] - personality.thinkingTimeRange[0]) + personality.thinkingTimeRange[0];
      
      await new Promise(resolve => setTimeout(resolve, thinkingTime));
      
      const aiMove = getAIMove(gameMode === 'AI_HARD' ? 'hard' : 'easy');
      const newBoard = [...board];
      newBoard[aiMove] = 'O';
      setBoard(newBoard);
      
      const result = checkWinner(newBoard);
      if (result) {
        handleWin(result, result === 'O' ? [aiMove] : []);
      } else {
        setCurrentPlayer('X');
      }
      setIsAIThinking(false);
    }
  };

  const handleWin = (result: Player | 'Draw', lastMove: number[]) => {
    setWinner(result);
    if (result !== 'Draw') {
      const winningCombo = checkWinner(board, true);
      setWinningCells(winningCombo || lastMove);
      // Only show confetti when human player (X) wins
      if (result === 'X') {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 5000);
      }
    }
    updateStats(result);
  };

  const updateStats = (result: Player | 'Draw') => {
    if (gameMode !== 'PVP') {
      setStats(prev => ({
        wins: prev.wins + (result === 'X' ? 1 : 0),
        draws: prev.draws + (result === 'Draw' ? 1 : 0),
        losses: prev.losses + (result === 'O' ? 1 : 0)
      }));
    }
  };

  useEffect(() => {
    handleAITurn();
  }, [currentPlayer, gameMode]);

  const handleClick = (index: number) => {
    if (board[index] || winner || (currentPlayer === 'O' && gameMode !== 'PVP' && isAIThinking)) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const result = checkWinner(newBoard);
    if (result) {
      handleWin(result, [index]);
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
    setWinningCells([]);
    setIsAIThinking(false);
    setShowConfetti(false);
  };

  const currentTheme = themes[theme];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${currentTheme.background} ${currentTheme.text} flex items-center justify-center p-4 safe-top safe-bottom`}>
      {showConfetti && <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        recycle={false}
        numberOfPieces={200}
        gravity={0.3}
      />}
      
      <div className={`${
        theme === 'dark' 
          ? 'bg-gray-800/40' 
          : 'bg-white/30 backdrop-blur-md border border-white/50'
      } rounded-2xl shadow-2xl p-4 sm:p-8 max-w-md w-full transition-all duration-300 glass-effect animate-fade-in
        ${winner ? 'animate-winner-glow' : ''}`}>
        
        <Header
          theme={theme}
          setTheme={setTheme}
          setShowAuthorInfo={setShowAuthorInfo}
        />

        <GameStats
          stats={stats}
          theme={theme}
          gameMode={gameMode}
        />

        <GameControls
          gameMode={gameMode}
          setGameMode={setGameMode}
          resetGame={resetGame}
          theme={theme}
        />

        <GameStatus
          winner={winner}
          currentPlayer={currentPlayer}
          isAIThinking={isAIThinking}
          theme={theme}
        />

        <GameBoard
          board={board}
          handleClick={handleClick}
          winner={winner}
          isAIThinking={isAIThinking}
          theme={theme}
          winningCells={winningCells}
        />

        <NewGameButton
          onClick={resetGame}
          theme={theme}
        />

        <AuthorInfo
          show={showAuthorInfo}
          onClose={() => setShowAuthorInfo(false)}
          theme={theme}
        />
      </div>
    </div>
  );
}

export default App;