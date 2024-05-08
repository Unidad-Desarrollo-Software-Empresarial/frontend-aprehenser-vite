/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'monserrat': ['Montserrat', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'poppins': ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'open-sans': ['Open Sans', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors:{
        'footer-bg': '#141D28',
        'divider-footer': '#343D48',
        'footer-title-text': '#11BFDD',
        'labels-grey': '#A5A5A5',
        'btn-see-more': '#FF6F00', //naranja
        'divider-title': '#F9D14E', //amarillo
        'title-card': '#11BFDD'
      },
      columnCount: [2],
      columnGap: ['1rem'],
    },
  },
  plugins: [],
}

