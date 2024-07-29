/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-main': '#161815',
        'to-gray-main': '#747E6E',
      },
      animation: {
        "loop-scroll" : "loop-scroll 50s linear infinite",
      },
      keyframes: {
        "loop-scroll" : {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        }
      },
      opacity: {
        7: "0.7"
      }
    },
  },
  plugins: [],
}

