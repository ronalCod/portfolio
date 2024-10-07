/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ['./public/**/*.html','./src/**/*.{vue,js,ts,jsx,tsx}'],
  // // purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // darkMode: false, // or 'media' or 'class'
  // theme: {
  //   extend: {},
  // },
  // variants: {
  //   extend: {},
  // },
  // plugins: [],

  // content: ['./public/**/*.html','./src/**/*.{vue,js,ts,jsx,tsx}','./index.html',],
  content: [
    './index/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

