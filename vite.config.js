import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// `base: "./"` makes the build work on any host or sub-path
// (GitHub Pages project URLs, Netlify, Vercel, cPanel, etc.).
export default defineConfig({
  plugins: [react()],
  base: "./",
});
