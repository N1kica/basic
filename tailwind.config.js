/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'search': "url('assets/images/background.jpg')",
      }
    }
  },
  plugins: []
}
