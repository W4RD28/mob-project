module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'beige': '#f0e3ca',
      'orange': '#ff8303',
      'brown': '#a35709',
      'black': '#1b1a17'
    },
    textColor: {
      'header': '#a35709',
      'body': '#773e35'
    },
    fontFamily: {
      'header': ["Montserrat", "Roboto", "ui-sans-serif", "Open-Sans"],
      'button': ["Roboto", "ui-sans-serif", "Open-Sans"]
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
