/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/simulators/**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
