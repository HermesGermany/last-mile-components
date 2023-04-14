const twConfig = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "hermes-blue": "var(--hermes-blue)",
        "hermes-blue-hover": "var(--hermes-blue-hover)",
        "hermes-lightblue": "var(--hermes-lightblue)",
        "hermes-orange": "var(--hermes-orange)",
        "hermes-orange-hover": "var(--hermes-orange-hover)",
        "hermes-signal-green": "var(--hermes-signal-green)",
        "hermes-signal-green-light": "var(--hermes-signal-green-light)",
        "hermes-signal-yellow": "var(--hermes-signal-yellow)",
        "hermes-signal-yellow-light": "var(--hermes-signal-yellow-light)",
        "hermes-signal-red": "var(--hermes-signal-red)",
        "hermes-signal-red-light": "var(--hermes-signal-red-light)",
        "hermes-grey-50": "var(--hermes-grey-50)",
        "hermes-grey-30": "var(--hermes-grey-30)",
        "hermes-grey-10": "var(--hermes-grey-10)",
        "hermes-grey-5": "var(--hermes-grey-5)",
        "hermes-grey": "var(--hermes-grey)",
        "hermes-grey-light": "var(--hermes-grey-light)",
      },
      fontFamily: {
        marselis: ["Marselis"],
      },
    },
  },
  plugins: [],
}

export default twConfig
