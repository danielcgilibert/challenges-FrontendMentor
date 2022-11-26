/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Space Grotesk', 'sans-serif'],
    },
    fontWeight: '500',

    extend: {
      colors: {
        whiteT: 'hsl(0, 0 %, 100 %)',
        LightGrayishViolet: 'hsl(270, 3%, 87%)',
        DarkGrayishViolet: 'hsl(279, 6%, 55%)',
        VeryDarkViolet: 'hsl(278, 68%, 11%)',
      },
    },
  },
  plugins: [],
}
