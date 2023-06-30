const twConfig = {
  jit: true,
  corePlugins: {
    preflight: false,
  },
  prefix: "tw-",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "hermes-blue": "#0091cd",
        "hermes-blue-hover": "#006d9a",
        "hermes-blue-light": "#cce9f5",
        "hermes-orange": "#e9530e",
        "hermes-orange-hover": "#ba420c",
        "hermes-orange-light": "#ffa800",
        "hermes-signal-green": "#6ea528",
        "hermes-signal-green-light": "#d3e4be",
        "hermes-signal-yellow": "#e6aa00",
        "hermes-signal-yellow-light": "#faeecc",
        "hermes-signal-red": "#c30005",
        "hermes-signal-red-light": "#f3cccd",
        "hermes-grey-50": "#9d9da0",
        "hermes-grey-30": "#c4c4c6",
        "hermes-grey-10": "#ebebec",
        "hermes-grey-5": " #f5f5f6",
        "hermes-grey": "#3c3c41",
        "hermes-grey-light": "#e2e2e3",
      },
      fontFamily: {
        sans: [
          "Roboto",
          "Segoe\\ UI",
          "Tahoma",
          "Geneva",
          "Verdana",
          "sans-serif",
        ],
        marselis: [
          "Marselis",
          "Roboto",
          "Segoe\\ UI",
          "Tahoma",
          "Geneva",
          "Verdana",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
}

export default twConfig
