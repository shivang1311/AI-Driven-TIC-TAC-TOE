import { BoardState, Player } from '../types';
import { winningCombinations } from '../constants';

export const checkWinner = (boardState: BoardState, returnCombo: boolean = false): Player | 'Draw' | null | number[] => {
  for (const combo of winningCombinations) {
    const [a, b, c] = combo;
    if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
      return returnCombo ? combo : boardState[a] as Player;
    }
  }
  
  if (boardState.every(cell => cell !== null)) {
    return 'Draw';
  }
  
  return null;
};

export const getEmptyCells = (boardState: BoardState): number[] => {
  return boardState.reduce((acc: number[], cell, index) => {
    if (cell === null) acc.push(index);
    return acc;
  }, []);
};

export const minimax = (
  boardState: BoardState,
  depth: number,
  isMaximizing: boolean
): number => {
  const result = checkWinner(boardState);
  
  if (result === 'O') return 10 - depth;
  if (result === 'X') return depth - 10;
  if (result === 'Draw') return 0;
  
  const emptyCells = getEmptyCells(boardState);
  
  if (isMaximizing) {
    let bestScore = -Infinity;
    for (const cell of emptyCells) {
      boardState[cell] = 'O';
      bestScore = Math.max(bestScore, minimax(boardState, depth + 1, false));
      boardState[cell] = null;
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (const cell of emptyCells) {
      boardState[cell] = 'X';
      bestScore = Math.min(bestScore, minimax(boardState, depth + 1, true));
      boardState[cell] = null;
    }
    return bestScore;
  }
};