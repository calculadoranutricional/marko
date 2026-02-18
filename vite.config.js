import { defineConfig } from "vite";
import marko from "@marko/run/vite";
import adapter from "@marko/run-adapter-static";

export default defineConfig(({ command }) => ({
  // Si estamos construyendo para GitHub usa /marko/, si es dev usa /
  base: command === 'build' ? '/marko/' : '/',
  plugins: [
    marko({
      adapter: adapter()
    })
  ],
  server: {
    // Forzamos a Vite a ignorar la carpeta dist para que no se rompa el local
    watch: {
      ignored: ['**/dist/**']
    }
  }
}));
