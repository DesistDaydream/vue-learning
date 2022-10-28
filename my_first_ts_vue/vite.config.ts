import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // 解决 axios 跨域问题
  server: {
    // host: "0.0.0.0",
    proxy: {
      "/api": {
        target: "http://iwenwiki.com", //实际请求地址
        changeOrigin: true,
      },
    },
  },
})
