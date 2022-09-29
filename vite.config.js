import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  // https://vitejs.dev/guide/build.html#library-mode
  build: {
    lib: {
      //eslint-disable-next-line
      entry: resolve(__dirname, "src/harness-vue-bootstrap.js"),
      name: "harness-vue-bootstrap",
      fileName: (format) => `harness-vue-bootstrap.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // Add external deps here
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  plugins: [vue()],
});
