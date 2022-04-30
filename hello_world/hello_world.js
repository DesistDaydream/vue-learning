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
newApp.mount('#app')
