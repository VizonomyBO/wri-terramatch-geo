/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        dark:
        {
          100: "#B9BAAF",
          200: "#868686",
          300: "#697A7F",
          400: "#5C5C5C",
          500: "#353535",
          600: "#22252A"
        },
        grey:
        {
          100: "#F2F4F5",
          200: "#EAE8F0",
          300: "#E6E6E6",
          400: "#D7D7D7",
          500: "#AEAEAE"
        },
        green: "#55AB68",
        red:
        {
          100: "#FFE0E0",
          200: "#FF6464",
          300: "#FF4040"
        },
        blue:
        {
          100: "#E9EFFF",
          200: "#D4EEF9",
          300: "#27A9E0",
          400: "#2398D8",
          500: "#0079FF",
          500: "#1B59F8",
          500: "#092C3C",
          500: "#002633",
        }
      }
    },
    color:{
      'primary': '#FF6363',
      'secondary': {
        100: '#E2E2D5',
        200: '#888883',
      }
    }
  },
  plugins: [],
}
