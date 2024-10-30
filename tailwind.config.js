/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#8b2c35',
        secondary: '#958d83',
        'primary-500': '#562f2f',
        'dark-dark': '#060404',
        'secondary-green': '#6c6c66',
        'secondary-dark': '#696464',
        'primary-dark': '#2c120f',
        'secondary-green-dark': '#34342e',
        'brown': '#1c1c18',
        'primary-brown': '#342c34',
      }

    },
  },
  plugins: [],
}

