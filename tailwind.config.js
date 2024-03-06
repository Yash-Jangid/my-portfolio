/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF5733', // Example custom color
        orange: '#ff6b00',
        black: '#101010',
        secondary: '#606060',
        light: '#fff5ef',
        grey: '#f9f9f9',
        transprint_primary: 'rgb(255, 107, 0, 0.3)',
        transprint_secondary: 'rgb(0,0,0, 0.5)',
      },
      width: {
        30: '30%',
        18: '18%',
      },
      fontFamily: {
        first: ["Mochiy Pop One", "sans-serif"],
        second: ["Poppins", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '3rem',
          xl: '4rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
        width: {
          '11/12': '91.666667%',
        },
      },
    },
  },
  plugins: [],
}
