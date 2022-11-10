<script setup lang="ts">
defineProps<{
  msg: string
}>()

// 声明触发事件
const emit = defineEmits<{
  // 创建一个名为 enlarge-text 的事件
  (event: "enlarge-text"): void
  // 创建一个名为 reduce-text 的事件，且该事件触发时可以接收一个数字类型的参数
  (event: "reduce-text", val: number): void
}>()
// 创建的事件可以在父组件中使用 v-on 指令监听：
// v-on:enlarge-text="处理逻辑"
// v-on:reduce-text="处理逻辑"
// v-on: 可以简写为 @
// @enlarge-text="处理逻辑"
// @reduce-text="处理逻辑"

// 在点击事件的处理逻辑中，调用 emit 声明的事件
const enlargeText = () => {
  // 调用 emit 中名为 enlarge-text 的事件
  emit("enlarge-text")
}
const reduceText = () => {
  // 调用 emit 中名为 reduce-text 的事件，并传递一个数字类型的参数
  emit("reduce-text", 0.4)
}
</script>

<template>
  <p>{{ msg }}</p>
  <!-- click 事件将会调用 enlrgeText 函数，
    函数中将会触发 enlarge-text 事件 -->
  <button @click="enlargeText">放大字体</button>
  <button @click="reduceText">缩小字体</button>
</template>

<style scoped></style>
