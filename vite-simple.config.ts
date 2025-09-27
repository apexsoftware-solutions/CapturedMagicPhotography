import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Simplified Vite config without Replit plugins for clean frontend-only development
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    host: '0.0.0.0',
    port: 5000,
    fs: {
      strict: false,
      allow: ['..']
    },
    allowedHosts: true, // Allow all hosts for Replit preview
  },
});