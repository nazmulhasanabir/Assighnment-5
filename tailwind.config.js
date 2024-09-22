/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
       color:{
        CustomeRGBA: 'rgba(17, 17, 17, 0.1)',
       }
      },
    },
    
    plugins: [],
  }