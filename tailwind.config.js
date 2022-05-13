module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'redhatdisplay': ['Red Hat Display', 'sans-serif'],
      },
      colors: {
        primary: '#E0E8FF',
        secondary: '#3829E0',
        dark: '#1A2040',
        veryPaleBlue: 'hsl(225, 100%, 98%)',
        desaturatedBlue: 'hsl(224, 23%, 55%)',
        darkBlue: 'hsl(223, 47%, 23%)',
      }
    },
  },
  plugins: [],
}
