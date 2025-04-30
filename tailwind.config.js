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
        primary: {
          dark: "#0a192f",
          light: "#ffffff",
        },
        secondary: {
          dark: "#64ffda",
          light: "#0a192f",
        },
        tertiary: {
          dark: "#8892b0",
          light: "#4a5568",
        },
        light: {
          dark: "#ccd6f6",
          light: "#1a202c",
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 