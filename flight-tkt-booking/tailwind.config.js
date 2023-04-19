/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {  
    extend: {
      fontFamily:{
        antique:['Inknut Antiqua', 'serif'],
        courier:['Courier Prime', 'monospace'],
        contrail:['Contrail One', 'cursive'],
        federo:['Federo', 'sans-serif'],
        hammer:['Hammersmith One', 'sans-serif'],
        khand:['Khand', 'sans-serif'],
        itim:['Sono', 'sans-serif']
      }
    },
  },
  plugins: [],
}
