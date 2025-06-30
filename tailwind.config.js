/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        blue: {
          600: '#000AFF',
          700: '#0008CC',
        }
      },
      animation: {
        'bounce': 'bounce 2s infinite',
      }
    },
  },
  plugins: [],
};