<script setup lang="ts">
defineProps<{
  msg: string
}>()

// 声明需要抛出的事件
const emit = defineEmits(["enlarge-text", "reduce-text"])
console.log(emit)
</script>

<template>
  <p>{{ msg }}</p>
  <button @click="$emit('enlarge-text')">放大字体</button>
  <button @click="$emit('reduce-text')">缩小字体</button>
</template>

<style></style>
