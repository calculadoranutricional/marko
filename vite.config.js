import { defineConfig } from "vite";
import marko from "@marko/run/vite";
import adapter from "@marko/run-adapter-static";

export default defineConfig({
  // 'base' debe ser el nombre de tu repo para que los archivos carguen bien en GitHub Pages
  base: '/marko/', 
  plugins: [
    marko({
      adapter: adapter()
    })
  ]
});
