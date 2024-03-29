import react from "@vitejs/plugin-react"
import path from "node:path"
import tailwindcss from "tailwindcss"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"
import { dependencies, peerDependencies } from "./package.json"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/lib/index.ts"),
      name: "lmc",
      formats: ["es", "umd"],
      fileName: (format) => `lmc.${format}.js`,
    },
    rollupOptions: {
      external: [
        ...Object.keys(peerDependencies),
        ...Object.keys(dependencies),
      ],
      output: {
        globals: {
          react: "React",
          "@headlessui/react": "@headlessui/react",
          "react-popper": "reactPopper",
        },
      },
    },
    sourcemap: true,
    target: "esnext",
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/tests/setup.ts",
  },
})
