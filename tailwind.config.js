/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      colors: {
        background: '#030712', // Deep slate 950
        surface: 'rgba(255, 255, 255, 0.03)',
        surfaceBorder: 'rgba(255, 255, 255, 0.08)',
      }
    },
  },
  plugins: [],
}