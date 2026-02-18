import { defineConfig } from "vite";
import marko from "@marko/run/vite";
import adapter from "@marko/run-adapter-static";

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/marko/' : '/',
  plugins: [
    marko({
      adapter: adapter()
    })
  ],
  server: {
    watch: {
      // Evitamos que Vite local vigile la carpeta dist
      ignored: ['**/dist/**']
    }
  }
});
