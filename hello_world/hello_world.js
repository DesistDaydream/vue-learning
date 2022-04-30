// 创建一个新的应用实例
let newApp = Vue.createApp({
  data() {
    return {
      message: 'Hello Vue!',
      myname: "Lch"
    }
  }
})

// 将应用与页面关联起来，这里将 id 为 app 的元素挂载到一个 Vue 实例上
let vm = newApp.mount('#app')
// 此时，我们在浏览器的 Console 中，使用 vm.message="Hello Vue!" 以改变 message 的值