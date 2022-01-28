const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      customblue: '#1F336C', //bg-Customblue 
      ...colors 
    },
    fontFamily:{
      sans: ['Roboto','sans-serif']
    },
    extend: {
      '128': '32rem',
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  variants:{
    extend:{},
  },
  plugins: [],
}
