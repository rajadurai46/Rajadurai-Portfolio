/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
    darkMode: "class",
  theme: {
    extend: {
      colors:{
        dark: "#111111",
      },
      container:{
        center:true,
        padding:{
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
     
      backgroundImage: {
      'circular': 'repeating-radial-gradient(rgba(0,0,0,0.6) 2px, rgba(255,255,255) 5px, rgba(255,255,255)100px)',
      },
    },
  },
  plugins: [],
}

