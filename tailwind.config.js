const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue, js, ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors,
    extend: {}
  },
  variants: {
    extend: {
      ringColor: ['hover'],
      ringOffsetColor: ['hover'],
      ringOffsetWidth: ['hover'],
      ringOpacity: ['hover'],
      ringWidth: ['hover'],
    }
  },
  plugins: []
}
