/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['*.html'],
  theme: {
    extend: {
      screens: {
        sm0: '385px',
        sm1: '420px',
        smpro: '530px',
        sm2: '1780px',
        sm3: '2000px',
      },
      fontFamily: {
        plus: ['Plus Jakarta Sans', 'sans-serif'],
      },
      maxWidth: {
        '9xl': '580px',
        '10xl': '1800px',
        '11xl': '1650px',
        '12xl': '2000px',
        'logo-max': '350px',
        'upskils-text': '570px',
      },
      height: {
        'about-h': '680px',
        'about-pro': '750px',
      },
      colors: {
        'nav-clr': '#072125',
        'active-clr': '#F44335',
        'rang-clr': '#00FF84',
        'rang-text': '#2D3142',
        'line2-clr': '#F9CCC7',
        'learn-text': '#181818',
        upskils1: '#00FF84',
        upskils2: '#D6D1F3',
        'darkImg-clr': '-webkit-filter: invert(100%);',
      },
      backgroundColor: {
        'home-clr': '#FAFAFA',
        'home-btn': '#20484F',
        'line-clr': '#D1D3D4',
      },

      fontSize: {
        sm1: '8px',
        '5xl': '50px',
        '20xl': '64px',
      },
      textUnderlineOffset: {
        '10px': '13px',
      },
      boxShadow: {
        '3xl':
          ' rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px',
      },
      
      animation: {
        wiggle: 'wiggle 2s  ease-in-out   ',
        keyframes: {
          wiggle: {
            '0%': {
              opacity: '0',
              top: '0px',
            },
            '50%': {
              opacity: '0',
              top: '-100px',
            },

            '100%': {
              opacity: '1',
              top: '0px',
            },
          },
        },
      },
    },
  },
  plugins: [],
};

