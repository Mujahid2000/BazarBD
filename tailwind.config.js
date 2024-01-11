import keepPreset from "keep-react/preset";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  presets: [keepPreset],
  theme: {},
  plugins: [
    require('flowbite/plugin')
]
}

