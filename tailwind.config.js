/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}" ],
    darkMode: "class",
 
  theme: {
    extend: {
      
      colors:{
        dark: "#111111",
      },

      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },

      container:{
        center:true,
        padding:{
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
}

