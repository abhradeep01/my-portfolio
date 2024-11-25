/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens:{
        "x-sm":{
          "min":"0px",
          "max":"480px"
        },
        "md":{
          "max":"1024px"
        },
        "mid-tab":{
          max:"850px"
        }
      }
    },
  },
  plugins: [],
}

