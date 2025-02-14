/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'mulish': ['Mulish', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      }
    }
  },
  plugins: [],
}