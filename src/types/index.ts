export type Player = 'X' | 'O';
export type BoardState = (Player | null)[];
export type GameMode = 'PVP' | 'AI_EASY' | 'AI_HARD';
export type Theme = 'light' | 'dark';
export type AIPersonality = 'balanced' | 'aggressive' | 'defensive';