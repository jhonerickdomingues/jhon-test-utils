import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  build: {
    minify: true,
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      name: "utils",
      fileName: "index.js",
      formats: ["es"],
    },
    rollupOptions: {
      // https://rollupjs.org/configuration-options/
      external: ["react", "axios", "react-dom", "react-i18next", "i18next"],
    },
  },
});
