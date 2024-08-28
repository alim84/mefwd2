/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily: {
    
      mono: ['ui-monospace', 'SFMono-Regular'],
      
    },
    extend: {
      container:"1320px"
    },
  },
  plugins: [],
}