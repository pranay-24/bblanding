/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-primary': '#0071BC',
        'blue-light': '#E6F0F9',
        'blue-dark': '#005A96',
        'orange-primary': '#F7941D',
        'orange-dark': '#E67E00',
      },
      fontFamily: {
          heading: ['Kanit', 'sans-serif'],
        body:    ['Lato',  'sans-serif'],
      },
      boxShadow: {
        'nav': '0 2px 10px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};