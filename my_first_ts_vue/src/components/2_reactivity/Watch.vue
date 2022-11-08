<script setup lang="ts">
import { ref, watch, watchEffect } from "vue"

let numOne = ref(20)
let numTwo = ref(30)

// 监听 num 的变化
// 我们通过 watch() 函数来监听 num 的变化，当 num 的值发生变化时，就会执行回调函数
// watch() 函数的第一个参数是要监听的数据，第二个参数是监听到数据变化后的回调函数
// 注意：第一个参数必须是“响应式”数据
watch(numOne, (newVal, oldVal) => {
  console.log("num 的值发生了变化，新值为：" + newVal + "，旧值为：" + oldVal)
})

// 监听多个值
watch([numOne, numTwo], ([newVal1, newVal2], [oldVal1, oldVal2]) => {
  console.log("监听多个值的变化：")
  console.log("numOne 的值新值为：" + newVal1 + "，旧值为：" + oldVal1)
  console.log("numTwo 的值新值为：" + newVal2 + "，旧值为：" + oldVal2)
})

// 若要监听的对象是一个复杂数据类型，需要注意写法
let obj = ref({
  name: "张三",
  age: 20,
})
// 注意写法，若直接使用 obj.value.age 则报错：没有与此调用匹配的重载。
watch(
  () => obj.value.age,
  (newVal, oldVal) => {
    console.log("obj 的值发生了变化，新值为：" + newVal + "，旧值为：" + oldVal)
  }
)

// 使用 watchEffect() 函数监听全部数据变化
// watchEffect() 函数的参数是一个回调函数，回调函数中的代码会在组件渲染时执行一次，当监听的数据发生变化时，回调函数中的代码会再次执行
// 注意：watchEffect() 函数中的代码会在组件渲染时执行一次，所以如果在 watchEffect() 函数中使用 ref() 函数创建的数据，那么这些数据的值会在组件渲染时被初始化
// 也就是说，刷新页面时，watchEffect() 函数中的代码就会执行
watchEffect(() => {
  // 凡是在函数内部引用了响应式数据，都会被监听，并不用显式声明要监听哪些数据
  console.log(
    "使用 watchEffect 函数监听的 obj 的 age 的值发生了变化，新值为：" +
      obj.value.age
  )
  console.log("watchEffect 监听的数据", numOne.value)
})
</script>

<template>
  <h2>监听数据变化</h2>
  <div>
    <p>数字1: {{ numOne }}</p>
    <p>数字2: {{ numTwo }}</p>
    <button @click="numOne++">数字1+1</button>
    <button @click="numTwo++">数字2+1</button>
    <p>{{ obj.age }}</p>
    <button @click="obj.age++">年龄+1</button>
  </div>
</template>

<style scoped></style>
