/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'meubel-primary': '#A0522D',    // Sienna - warmer, more sophisticated brown
        'meubel-secondary': '#6D4C41',  // Brown 700 - complementary darker brown
        'meubel-accent': '#FBF7F4'      // Warm white - creates a softer background
      }
    },
  },
  plugins: [],
}
