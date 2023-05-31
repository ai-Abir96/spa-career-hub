import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Set up a new alias called `@assets` that points to your assets folder
      "@assets": "/src/assets",
    },
  },
});
