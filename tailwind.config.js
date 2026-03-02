/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'cyber-blue': '#00f0ff',
        'neon-purple': '#b026ff',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dmsans: ['"DM Sans"', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
      }
    },
  },
  plugins: [],
}
