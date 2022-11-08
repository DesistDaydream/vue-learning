<script setup lang="ts">
import { ref, reactive, toRefs } from "vue"
// 如果只是用标准方式声明了一个变量，这个变量的变化并不会被渲染到页面中。也就是说并不会被双向数据绑定
// let number = 0
// 我们可以使用 ref() 函数实例化一个 Ref<T = any> 接口，并将变量的值保存到接口中的 value 属性中。
// 这个接口是一个响应式的对象。Vue 会将模板内 {{}} 中的变量与该对象双向绑定。
// Vue 渲染模板时会自动追踪变量的变化，并且已经通过 .value 获取了 value 属性的值。
let number = ref<number>(0)

const reactiveButton = () => {
  // 通过 ref() 方法声明的是一个对象，变量是该对象中名为 value 的属性。
  // 所以想要修改变量的值，就是修改 ref 对象中 value 属性的值。
  number.value++

  console.log("按钮被点了一次，当前 number 的值为：", number.value)
}

// 解构赋值
let obj = {
  name: "张三",
  age: 18,
}
let objRef = reactive(obj)
// 使用 toRefs() 函数解构 reactive() 函数声明的对象, 得到对象的每个属性的响应式的对象
// 解构出来的对象需要使用 .value 的方式进行操作
let { name, age } = toRefs(objRef)
name.value = "解构后赋值"
</script>

<template>
  <!-- 响应式是 Vue 的核心功能之一，它可以让我们在数据发生变化时，自动更新页面中的内容。
  在 Vue 中，响应式是通过 Proxy 实现的。Proxy 是 ES6 中新增的一个特性，它可以用来拦截对象的读写操作。
  在 Vue 中，我们可以通过 Proxy 来监听对象的读写操作，从而实现响应式。 -->
  <p>
    这是一个会变化的数据：<b>{{ number }}</b>
    <!-- 参见指令章节，@click 是 v-on:click 指令的简写，用以表示当发生点击事件时，会触发 reactiveButton 函数-->
    点击<button @click="reactiveButton">按钮</button
    >，将会触发数据变化的逻辑，数据的变化将会通过响应式的方式展现在页面上。
    每次点击按钮，都会触发一次数据变化的逻辑，可以在 F12
    的控制台中看到数据的变化。
  </p>

  <h2>解构</h2>
  <div>
    {{ name }}
    {{ age }}
  </div>
</template>

<style scoped></style>
