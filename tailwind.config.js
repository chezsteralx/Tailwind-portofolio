/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  //** Modif ^ untuk memantau perubahan pada HTML index sehingga bs di compile ke file css*/
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors:{
        primary:'#fcd34d',
        secondary:'#64748b',
        dark: '#0f172a',
        zinc: '#a1a1aa',
        
      },
      screens:{
        '2xl':'1320px',
      },
    },
  },
  plugins: [],
};
