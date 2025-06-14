/** @type {import('tailwindcss').Config} */
export default {
  presets: [
    require('../../packages/ui/tailwind-preset.js') // Use relative path instead of package name
  ],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
