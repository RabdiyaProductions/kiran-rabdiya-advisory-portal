import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "./", // works on GitHub Pages regardless of repo name
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "icons/icon-192.png", "icons/icon-512.png"],
      // IMPORTANT: GitHub Pages + HashRouter + Service Worker can cause non-HTML assets
      // (e.g. brochure.pdf) to be treated as a navigation request and incorrectly served
      // the SPA fallback (index.html). We denylist common binary/static extensions.
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,txt,xml,pdf}"],
        navigateFallbackDenylist: [/\.(?:pdf|png|jpg|jpeg|gif|svg|webp|ico|txt|xml)$/i],
      },
      manifest: {
        name: "Kiran Rabdiya — Construction Advisory",
        short_name: "KR Advisory",
        description: "Freelance commercial, contracts, and construction advisory (NW London + Home Counties).",
        theme_color: "#0b2a4a",
        background_color: "#ffffff",
        display: "standalone",
        start_url: ".",
        scope: ".",
        icons: [
          { src: "icons/icon-192.png", sizes: "192x192", type: "image/png" },
          { src: "icons/icon-512.png", sizes: "512x512", type: "image/png" }
        ]
      }
    })
  ]
});
