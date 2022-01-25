import {
  defineConfig
} from "vite";

export default defineConfig({
  // root: "",
  build: {
    outDir: "dist",
    // emptyOutDir: true,
    // lib: {
    //   entry: path.resolve(__dirname, "src/main.js"),
    //   name: "MyLib",
    //   formats: ["iife"],
    //   fileName: (format) => `my-lib.js`
    // },
  },
  server: {},
  plugins: [],
});