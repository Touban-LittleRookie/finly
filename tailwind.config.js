/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/**/*.ejs',  // Include all EJS files in the views directory
    './public/**/*.html', // Include HTML files in the public directory (if any)
    './public/**/*.js'    // Include JavaScript files in the public directory (if any)
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};