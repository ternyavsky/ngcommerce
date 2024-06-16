/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      'sm': '400px',
      'md': '600px',
      'xl': '850px',
    },
    fontFamily: {
      integral: ['IntegralCF', 'sans-serif'],
      satoshi: ['Satoshi', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

