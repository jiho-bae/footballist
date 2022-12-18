/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'video-lists': 'repeat(auto-fill, minmax(300px, 1fr))',
      },
      colors: {
        'main-blue': 'cornflowerblue',
        'main-red': 'tomato',
        'main-brown': '#854d0e',
      },
      maxWidth: {
        '4/5': '80%',
      },
    },
  },
  plugins: [],
};
