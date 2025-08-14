/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      animation: {
        'ripple-up': 'ripple-up 1.2s ease-out infinite',
      },
      keyframes: {
        'ripple-up': {
          '0%': { 
            transform: 'scale(0) translateY(0)',
            opacity: '0.7' 
          },
          '50%': { 
            transform: 'scale(1.1) translateY(-30%)',
            opacity: '0.4' 
          },
          '100%': { 
            transform: 'scale(2) translateY(-100%)',
            opacity: '0' 
          }
        }
      },

      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
animation: {
        slide: "slide 20s linear infinite",
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

