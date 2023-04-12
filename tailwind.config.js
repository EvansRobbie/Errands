/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Raleway: ['Raleway', 'cursive'],
        cursive: 'cursive',
        Necko: ['Neko One', 'cursive']
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage:{
        circular: 'repeating-radial-gradient(#f5f5f5 2px, rgb(31,41,55, 0.01) 5px, rgb(31,41,55, 0.01) 100px);'
      }
    },
  },
  plugins: [],
}
