// 创建一个新的应用实例
let newApp = Vue.createApp({
  data() {
    return {
      message: 'Hello Vue!',
      myname: "Lch"
    }
  }
})

// mount 的返回值是一个 vm 实例，可以用来操作这个实例，比如设置数据、添加事件响应器等。
// 在这个例子中，我们将返回的 vm 实例挂载到 id 为 app 的元素上。也就是将 Vue 的一个应用实例挂载到 DOM 元素上。
// 此时，我们在浏览器的 Console 中，使用 vm.message="Hello Vue!" 以改变 message 的值
let vm = newApp.mount('#app')