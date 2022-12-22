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
        'match-gray': '#b2bec3',
        'match-red': '#ff7675',
        'match-green': '#1dd1a1',
      },
      maxWidth: {
        '4/5': '80%',
      },
      width: {
        'matches-team': '25%',
        'matches-plan': '15%',
        'matches-refree': '15%',
        'matches-score': '20%',
        'standings-team': '30%',
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
