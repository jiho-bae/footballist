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
        'title-gray': 'rgb(209 213 219)',
      },
      maxWidth: {
        '4/5': '80%',
      },
      width: {
        'standings-team': '30%',
        'standings-diff2': '14%',
        'standings-diff': '14%',
        'standings-rest': '7%',
        'scorers-player': '34%',
        'scorers-team': '30%',
        'scorers-rest': '12%',
      },
      height: {
        '80vh': '80vh',
        '26r': '26rem',
        '29r': '29rem',
      },
    },
  },
  plugins: [],
};
