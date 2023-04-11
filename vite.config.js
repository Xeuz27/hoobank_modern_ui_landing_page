import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // Set the path to your manifest file
      manifest: "public/manifest.json",
      // Set the path to the service worker file
      workbox: {
        swDest: "sw.js",
      },
      // Set the base URL for the assets
      base: ".",
      // Set the scope for the service worker
      scope: ".",
      // Set the start URL for the PWA
      startUrl: ".",
      // Set the display type for the PWA
      display: "standalone",
      // Set the background color for the PWA
      backgroundColor: "#ffffff",
      // Set the theme color for the PWA
      themeColor: "#000000",
      // Set the icons for the PWA
      icon: {
        source: "public/icon.png",
        sizes: [64, 128, 192, 256, 384, 512],
      },
      // Set the caching strategy for the service worker
      cachingStrategy: "CacheFirst",
      // Set the files to be precached
      includeAssets: [
        "favicon.ico",
        "robots.txt",
        "public/**/*.js",
        "public/**/*.css",
        "public/**/*.html",
        "public/**/*.png",
        "public/**/*.svg",
        "public/**/*.json",
      ],
    }),
  ],
});
