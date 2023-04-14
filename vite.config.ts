import react from "@vitejs/plugin-react"
import path from "node:path"
import tailwindcss from "tailwindcss"
import dts from "vite-plugin-dts"
import { defineConfig } from "vitest/config"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    preserveSymlinks: true,
  },
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
      external: ["react", "react-dom", "tailwindcss"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss",
        },
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
})
