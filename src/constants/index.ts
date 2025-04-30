export const authorInfo = {
  name: "Shivang Agrawal",
  title: "Full Stack Web Developer",
  bio: "Passionate full stack web developer with expertise in modern web technologies. Skilled in both frontend and backend development, creating responsive and user-friendly applications. Always eager to learn new technologies and take on challenging projects.",
  github: "https://github.com/shivang1311",
  linkedin: "https://www.linkedin.com/in/shivangag1311/",
  email: "shivangag131104@gmail.com"
};

export const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

export const themes = {
  light: {
    background: 'bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-400 via-rose-100 to-lime-100',
    text: 'text-gray-800'
  },
  dark: {
    background: 'bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900',
    text: 'text-white'
  }
};

export const aiPersonalities = {
  balanced: {
    thinkingTimeRange: [800, 1500],
    confidenceRange: [0.7, 0.9],
    description: 'Makes balanced decisions'
  },
  aggressive: {
    thinkingTimeRange: [400, 800],
    confidenceRange: [0.8, 1],
    description: 'Prioritizes winning moves'
  },
  defensive: {
    thinkingTimeRange: [1200, 2000],
    confidenceRange: [0.6, 0.8],
    description: 'Focuses on blocking opponent'
  }
};