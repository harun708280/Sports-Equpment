/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}" // Include Flowbite content
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(145deg, #9cb80e 0%, #7db80e 51%, #6eb80e 75%)',
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('flowbite/plugin') // Add Flowbite as a plugin
  ],
}
