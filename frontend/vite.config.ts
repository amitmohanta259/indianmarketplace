import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  server: {
    open: true,

    proxy: {
      "/api": {
        target: "http://127.0.0.1:5006",
        changeOrigin: true,
        secure: false,
      },
      "/test": {
        target: "http://127.0.0.1:5006",
        changeOrigin: true,
        secure: false,
      },
    },
  },

  build: {
    outDir: "dist",
  },
});
