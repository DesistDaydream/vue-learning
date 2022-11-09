<script setup lang="ts">
defineProps<{
  msg: string
}>()

// 声明触发的事件
const emit = defineEmits<{
  (event: "enlarge-text"): void
  (event: "reduce-text"): void
}>()

// 点击事件
const enlargeText = () => {
  emit("enlarge-text")
}
const reduceText = () => {
  emit("reduce-text")
}
</script>

<template>
  <p>{{ msg }}</p>
  <button @click="enlargeText">放大字体</button>
  <button @click="reduceText">缩小字体</button>
</template>

<style></style>
