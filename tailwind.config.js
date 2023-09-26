/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6602',
        secondary: '#5A2E98',
        tabrow: '#F8F1FF',
        tabcell: '#D3E0F0'
      }
    },
  },
plugins:[],
}