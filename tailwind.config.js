/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    container:{
      center:true,
      screens: {
        'sm': '600px',
        'md': '700px',
        'lg': '980px',
        'xl': '1200px',
        '2xl': '1450px',
      }
    },
    extend: {
      colors:{
       primery:'#EE929E',
       secondry:'#F5C6CE',
       darkprimary:"#045757",
       darksecondry:'#044343',
       darkdark:"#222222",
       light:"#E4E4E4"
      }
     },
  },
  plugins: [],
}

