/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

    colors: {
      'primary': '#36435F',
      'secondary': '#96A0B5',
      'btn-first': '#3E81CF',
      'btn-second': '#60C2EC',
      'line-primary': '#E2DFDF',
    },
    },
  },
  plugins: [],
}

