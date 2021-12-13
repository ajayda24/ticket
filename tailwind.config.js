module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.js', './components/**/*.js', './style.css'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#22577E',
        secondary: '#DADDFC',
      },
    },
  },
  variants: {
    extend: {},
  },
}
