// 使用 import 关键字导入 Vue 包
// 浏览器无法识别 vue，必须指定具体路径，才可以发起请求获取这个静态资源
// 但是 vue 是一组文件的，需要通过打包工具将这一组文件转换为单一文件后，浏览器才可以获取并展示
// 通过 vite 等编译工具可以将 vue 模块打包成单一文件，并且可以自动将这个文件转换为 js 文件，vite 编译后，import 这行将会变为 import * as Vue from '/node_modules/.vite/deps/vue.js?v=cdaa4d3a'
// 或者也可以直接通过 CDN 的方式，在 html 文件的 script 标签中引入 Vue 包
import * as Vue from 'vue'

// 实例化一个 App。App 的 mount 方法可以将应用挂载到 DOM 元素上
let newApp = Vue.createApp({
  // data() 方法定义 App 的数据
  // 返回的数据会通过 Vue 模板解析并填充到 DOM 元素中。这里的 message、myname 将会被渲染到 DOM 元素中。
  // 这类似于 go 语言中的模板渲染
  data() {
    return {
      title: "Vue Demo",
      message: "Hello Vue!"
    }
  },
  // 定义 App 的方法。
  methods: {
    // Vue 会将 handleClick() 绑定到具有 @XXXX="handleClick()" 属性的 DOM 元素上，
    // @XXX 是一个特殊的 DOM 属性，它会被 Vue 解析为一个方法名，并将元素上绑定到方法上。
    // 比如 @click="handleClick()" 表示绑定一个点击事件，并将元素上绑定到 handleClick() 方法上，
    // 当点击元素时，Vue 会调用 handleClick() 方法。
    handleClick() {
      this.message = '你好 Vue!'
    }
  }
})

// mount() 方法将 App 挂载到 DOM 元素上, 并且返回一个 Vue 实例。
// mount() 方法返回一个 Vue 实例，它可以被用来访问 App 中定义的的数据和方法。
// 此时，我们在浏览器的 Console 、本地代码中，使用 vm.message="Hello Vue!" 以改变 message 的值
let vm = newApp.mount('#app')