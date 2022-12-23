// const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', 'src/**/*.{js,jsx,ts,tsx,html}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '969px',
      xl: '1200px',
      '2xl': '1400px'
    },
    extend: {}
  },
  corePlugins: {
    container: false
  },
  plugins: []
}
