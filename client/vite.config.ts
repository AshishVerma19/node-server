import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "../server/src/client/dist", // Ensures the build is stored in the root dist folder
  },
  server: {
    proxy: {
      "/api": "http://localhost:3000", // Proxy API requests to the backend server in development
    },
  },
});
