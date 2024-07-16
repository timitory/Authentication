/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'light-blue': {
          50: '#ebf8ff',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
        },
      },
    },
  },
  plugins: [],
}

