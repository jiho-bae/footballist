/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/libs/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'video-lists': 'repeat(auto-fill, minmax(300px, 1fr))',
      },
      colors: {
        'main-blue': 'cornflowerblue',
        'main-red': 'tomato',
        'main-brown': '#854d0e',
        'main-gray': 'rgb(107 114 128)',
        'title-gray': 'rgb(209 213 219)',
        'match-gray': '#b2bec3',
        'match-red': '#ff7675',
        'match-green': '#1dd1a1',
        'card-brown': '#F6F3F2',
        'modal-black': 'rgba(255,255,255,0.7)',
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
        'scorers-score': '14%',
        'scorers-rest': '11%',
        '43/100': '43%',
      },
      height: {
        '80vh': '80vh',
        '26r': '26rem',
        '29r': '29rem',
        '60r': '60rem',
        '57r': '57rem',
      },
    },
  },
  plugins: [],
};
