// 导入 vue 模块
import { createApp } from "vue"
// 2. 导入 Vue Demo 文件，用以通过 createAPP 实例化一个 App
import App from "./App.vue"

import "./assets/main.css"

// 3. 创建 App，这是 Vue Demo 程序的根
// 使用声明的类实例化 App
let newAPP = createApp(App)
// mount() 方法将 App 挂载到 DOM 元素上, 并且返回一个 Vue 实例。
// mount() 方法返回一个 Vue 实例，它可以被用来访问 App 中定义的的数据和方法。
// 此时，我们在浏览器的 Console 、本地代码中，使用 vm.message="Hello Vue!" 以改变 message 的值
let vm = newAPP.mount("#app")
console.log(vm)

// 此时，我们就可以开始编辑 App.vue 文件，以编写我们自己想要的页面了
