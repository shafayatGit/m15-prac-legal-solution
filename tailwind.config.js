/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        backgroundImage:{
            blackOverlay: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0,8) 100%))"
        },
      },
    },
    plugins: [],
  }