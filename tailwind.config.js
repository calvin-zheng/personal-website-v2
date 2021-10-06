const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'light-blue': colors.sky,
        cyan: colors.cyan,
        'white-custom': '#F9F9F9',
      },
      boxShadow: {
        'navbar': "0 4px 4px rgba(0, 0, 0, 0.4)",
      }
    },
  },
  variants: {
    extend: {
      ringColor: ['hover'],
      ringOffsetColor: ['hover'],
    },
  },
  plugins: [],
}
