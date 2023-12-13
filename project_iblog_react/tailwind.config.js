/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        content : {
          'eye' : 'url("/u_eye-slash.png")',
        },
      fontFamily: {
        "Inter" : ['Inter','sans-serif']
      }
    },
  },
  plugins: [],
}