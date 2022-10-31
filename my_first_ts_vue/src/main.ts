// 导入 vue 模块以使用 createApp() 函数
import { createApp } from "vue"
// 2. 导入的 App.vue 文件需要在下面使用 Vue 模块中的 createApp() 函数创建出一个 Vue 应用的**根组件**
import App from "./App.vue"
import router from "./router"
// 导入样式
import "./assets/main.css"

// 全局引入 Element Plus
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"

// ######################################################################################
// 3.######## 每个 Vue 应用都是通过 createApp() 函数创建一个新的应用实例开始的！！！ #########
// ######################################################################################
let app = createApp(App)

// 让应用实例使用路由，这是一种单页路由模式，在切换页面时，其实只是显示和隐藏，加快页面浏览效果
// 这个功能不算基础功能了，不建议刚开始学习就使用。
// 想要使用路由器功能，这是一个新的模块，需要在 package.json 中添加 vue-router 依赖
// "dependencies": {
//     "vue": "^3.2.38",
//     "vue-router": "^4.1.5"
//   },
app.use(router)
// 路由器功能必须要在实例调用 mount() 方法前调用。

// 使用 Element Plus UI 组件库
app.use(ElementPlus)

// mount() 方法将 App 挂载到 id=app 的 DOM 元素上, 并且返回一个 Vue 实例。
// 此时，App 这个根组件就被关联到 id=app 的 DOM 元素上，所有组件中的代码，将会被渲染到该元素中，浏览器即可展示页面
let vm = app.mount("#app")
// mount() 方法返回一个 Vue 实例，它可以被用来访问 App 中定义的的数据和方法。
// 此时，我们在浏览器的 Console 、本地代码中，使用 vm.message="Hello Vue!" 以改变 message 的值
console.log(vm)

// 此时，我们就可以开始编辑 App.vue 文件，以创造我们自己想要的页面了

// Vue 是“组件化”模式，一个页面的各个部分，可以拆分成一个一个的组件，这些组件通常被组织在 XXX.vue 文件中，通常保存在项目根目录的 components/ 目录下。
