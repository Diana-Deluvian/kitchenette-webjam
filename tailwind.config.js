module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
            'primary': '#e42116',
            'secondary': '#f24510'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
