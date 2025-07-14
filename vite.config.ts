import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import Sitemap from "vite-plugin-sitemap";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: "https://h-platform.online", // استبدل هذا برابط موقعك
      // يمكنك إضافة المزيد من الخيارات هنا مثل:
      // exclude: ['/secret'], // استبعاد مسارات معينة
      // routes: ['/some-static-page'], // إضافة مسارات ثابتة إضافية
    }),

    tailwindcss(),
  ],
  build: {
    outDir: "dist",
  },
  base: "./",
  server: {
    headers: {
      "X-Content-Type-Options": "nosniff",
    },
  },
});
