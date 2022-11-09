<script setup lang="ts">
// 通过接收 defineProps 的返回值，以调用传入的 props
// defineProps 会返回一个对象，该对象包含了所有 props 的类型定义。
const props = defineProps<{
  title: string
  msg?: string
}>()
console.log("Props返回值调用", props.title, props.msg)
// 我们还可以通过解构赋值的方式获取 props 中的数据
const { title, msg } = props
console.log("解构赋值：", title, msg)
</script>

<template>
  <h5>标题：{{ title }}</h5>
  <p>内容：{{ msg }}</p>
</template>

<style scoped></style>
