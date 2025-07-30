/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      

      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
animation: {
        slide: "slide 30s linear infinite",
      },

    },
    fontFamily: {
      spartan: ['"League Spartan"', 'sans-serif'],
      poppins: ['"Poppins"', 'sans-serif'],
      playfair: ['"Playfair Display"', 'serif'],
      sans: ['Inter', 'sans-serif'], 
      crimson: ['"Crimson Text"', 'serif'],
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}

