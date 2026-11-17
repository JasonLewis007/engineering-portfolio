import { env } from "node:process";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [
    react(),
    {
      name: "local-development-csp",
      apply: "serve",
      // Vite's local HMR runtime injects scripts/styles. Keep the restrictive
      // production policy in built HTML, without weakening it for development.
      transformIndexHtml(html) {
        return html.replace(
          /\s*<meta\s+http-equiv="Content-Security-Policy"[^>]*>/,
          "",
        );
      },
    },
  ],
  base: env.BASE_PATH || "/engineering-portfolio/",
  build: { sourcemap: false },
});
