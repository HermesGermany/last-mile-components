/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "hermes-blue": "var(--hermes-blue)",
        "hermes-lightblue": "var(--hermes-lightblue)",
        "hermes-orange": "var(--hermes-orange)",
        "hermes-orange-hover": "var(--hermes-orange-hover)",
      },
      fontFamily: {
        marselis: ["Marselis"],
      },
    },
  },
  plugins: [],
}
