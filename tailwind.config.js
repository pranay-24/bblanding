/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        'xs': 'var(--font-xs, 0.75rem)',
        'sm': 'var(--font-sm, 0.875rem)',
        'base': 'var(--font-base, 1rem)',
        'lg': 'var(--font-lg, 1.125rem)',
        'xl': 'var(--font-xl, 1.25rem)',
        '2xl': 'var(--font-2xl, 1.5rem)',
        '3xl': 'var(--font-3xl, 1.875rem)',
        '4xl': 'var(--font-4xl, 2.25rem)',
        '5xl': 'var(--font-5xl, 3rem)',
        '6xl': 'var(--font-6xl, 3.75rem)',
        '7xl': 'var(--font-7xl, 4.5rem)',
        '8xl': 'var(--font-8xl, 6rem)',
        '9xl': 'var(--font-9xl, 8rem)',
      },
      
      colors: {
        'blue-primary': '#0071BC',
        'blue-primary-dark': '#003572',
        'blue-light': '#E6F0F9',
        'blue-dark': '#005A96',
        'orange-primary': '#F7941D',
        'orange-dark': '#E67E00',
        'grey-color': '#666',
      },
      fontFamily: {
        heading: ['Kanit', 'sans-serif'],
        body: ['Lato', 'sans-serif'],
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