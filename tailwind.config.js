/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-primary': '#0071BC',
        'blue-primary-dark': '#003572',
        'blue-light': '#E6F0F9',
        'blue-dark': '#005A96',
        'orange-primary': '#F7941D',
        'orange-dark': '#E67E00',
        'grey-color':'#666',
      },
      fontFamily: {
          heading: ['Kanit', 'sans-serif'],
        body:    ['Lato',  'sans-serif'],
      },
      boxShadow: {
        'nav': '0 2px 10px rgba(0, 0, 0, 0.1)',
      },
       container: {
      center: true,
      padding: '2rem',
      screens: {
        'sm': '640px',
        'md': '1024px',
        'lg': '1024px',
        'xl': '1200px',    // Custom max-width
        '2xl': '1400px',   // Custom max-width
      },
    },
    
    },
  },
  plugins: [],
};