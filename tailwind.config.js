/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        lighterBlue: '#003566',
        darkerBlue: '#001D3D',
        darkGrey: '#000814',
        darkPurple: '#240046',
        purple: '#3C096C',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
