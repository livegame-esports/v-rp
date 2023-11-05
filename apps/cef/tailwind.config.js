/** @type {import('tailwindcss').Config} */
export default {
  // prettier-ignore
  content: [
    './app.vue',
    './pages/**/*.vue',
    './components/**/*.vue',
    './layouts/**/*.vue'
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {},
  },
  plugins: [],
};
