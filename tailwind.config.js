/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef6ff',
          100: '#d8e9ff',
          200: '#b4d4ff',
          300: '#84b8ff',
          400: '#4f94ff',
          500: '#2a73f7',
          600: '#1657db',
          700: '#1447b1',
          800: '#173f8b',
          900: '#19386d',
          950: '#122346'
        },
        accent: {
          500: '#00c2a8',
          600: '#02a18d'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 12px 40px -16px rgba(17, 24, 39, 0.35)'
      }
    },
  },
  plugins: [],
};
