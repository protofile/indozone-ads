/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'z-red': {
          600: '#E6465C',
          700: '#BD3245'
        },
        'z-teal': {
          600: '#01AFC3'
        },
        'z-purple': {
          600: '#B946E6'
        },
        'z-blue':{
          600: '#2196F3'
        }
      },
      fontFamily:{
        'plusjakartasans': '"Plus Jakarta Sans", sans-serif'
      },
      fontSize: {
        'xsm': ['.8125rem', {
          lineHeight: '1rem',
        }],
        'xxs': ['.6875rem', {
          lineHeight: '1rem',
        }],
        'md': ['16px', {
          lineHeight: '1rem',
        }],
      },
      lineHeight: {
        'leading-half': '0.5rem',
      }
    },
  },
  plugins: [],
}

