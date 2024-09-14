/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : '#703BF7',
        secondary : '#1A1A1A',
        tertiary : '#141414'
      },
      fontFamily : {
        Urbanist : ['Urbanist']
      }
    },
  },
  plugins: [],
}