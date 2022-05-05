import { defineConfig } from 'vite'

// 这里是从 vue/dist/vue.esm-bundler.js 中而不是 vue 中导入的原因是浏览器会提示如下报错：
// [Vue warn]: Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".
// 通过 vite 的配置设置别名，可以避免此报错，若不使用 vite 别名，则需要在 js 代码中，使用 import * as Vue from 'vue/dist/vue.esm-bundler.js' 导入 vue
export default defineConfig({
    plugins: [],
    resolve: {
      alias: {
        'vue': 'vue/dist/vue.esm-bundler.js'
      }
    }
  })