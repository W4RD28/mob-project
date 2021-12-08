module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'beige': '#f0e3ca',
      'orange': '#ff8303',
      'brown': '#a35709',
      'light-brown': '#efd299',
      'black': '#1b1a17',
      'white': '#ffffff',
      'white-brown': '#fffaef'
    },
    textColor: {
      'header': '#a35709',
      'body': '#773e35',
      'white': '#ffffff',
      'blue': '#0075FF'
    },
    fontFamily: {
      'header': ["Montserrat", "Roboto", "ui-sans-serif", "Open-Sans"],
      'button': ["Roboto", "ui-sans-serif", "Open-Sans"],
      'body': ["Roboto", "ui-sans-serif", "Open-Sans"]
    },
    container: {
      center: true
    },
    extend: {
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '100': '35rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
