<script setup lang="ts">
import { ref, reactive } from "vue"
let objOne = {
  name: "张三",
  age: 18,
}
let objReactive = reactive(objOne)

let objTwo = {
  name: "李四",
  age: 20,
}
let objRef = ref(objTwo)

console.log("ref() 函数获取的对象：", objRef)
console.log("ref() 函数获取的对象的值：", objRef.value)
console.log("reactive() 函数获取的对象：", objReactive)

// ref() 函数是对 reactive() 函数的封装，所以 ref() 函数获取的对象和 reactive() 函数获取的对象的区别就是：
// reactive() 仅对对象类型有效(对象、数组、Map 这种集合类型)，而对 string、number、boolean 这种原始数据类型无效。
// 我们不可以随意地“替换” reactive() 声明的的响应式对象，因为这将导致对初始引用的响应性连接丢失
</script>

<template>
  <div></div>
</template>

<style scoped></style>
