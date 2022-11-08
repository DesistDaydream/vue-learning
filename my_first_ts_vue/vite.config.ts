import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // 让我们在导入时使用可以使用 @ 符号作为 src 目录的别名，而不是相对路径，比如：
      // import App from '@/App.vue'
      // 而不是
      // import App from '../../App.vue'
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // 解决 axios 跨域问题
  server: {
    host: "0.0.0.0",
    proxy: {
      "/api": {
        target: "http://iwenwiki.com", //实际请求地址
        changeOrigin: true,
      },
    },
  },
})
