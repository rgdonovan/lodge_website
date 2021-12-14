module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundSize: {
      "30": "50%",
    },

    backgroundPosition: {
      "left-center": "15% 60%"
    },

    extend: {
      backgroundImage: {
        'logo': "url('./images/logo/lodge.jpg')"
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      borderColor: ['active'],
    },
  },
  plugins: [],
}
