/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@ismacopy/ui/tailwind-preset')],
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    // Include UI package components
    "../../packages/ui/src/**/*.{js,jsx,ts,tsx}"
  ],
};
