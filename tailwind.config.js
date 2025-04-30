/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
        'safe-top': { raw: '(safe-area-inset-top: constant(safe-area-inset-top))' },
        'safe-bottom': { raw: '(safe-area-inset-bottom: constant(safe-area-inset-bottom))' }
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)'
      }
    },
  },
  plugins: [],
};