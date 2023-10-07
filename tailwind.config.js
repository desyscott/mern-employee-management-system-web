/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   'figtree': ['Figtree', 'sans-serif'] 
      // },
      // height: {
      //   '128': '32rem',
      // }
    },
  },
  // plugins: [require("@tailwindcss/forms")],
}

