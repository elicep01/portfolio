/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#C5050C',
          dark: '#9B0000',
          light: '#D84A4F'
        },
        secondary: {
          DEFAULT: '#282728',
          light: '#494949'
        }
      }
    },
  },
  plugins: [],
};