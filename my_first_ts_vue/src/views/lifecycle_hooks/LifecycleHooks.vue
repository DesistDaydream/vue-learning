<script setup lang="ts">
import {
  onMounted,
  onBeforeUnmount,
  onUpdated,
  onBeforeUpdate,
  onBeforeMount,
  onUnmounted,
} from "vue"
console.log("执行 setup 函数")

onMounted(() => {
  console.log("执行 onMounted 函数")
})

onBeforeUnmount(() => {
  console.log("执行 onBeforeUnmount 函数")
})

onUpdated(() => {
  console.log("执行 onUpdated 函数")
})

onBeforeUpdate(() => {
  console.log("执行 onBeforeUpdate 函数")
})

onBeforeMount(() => {
  console.log("执行 onBeforeMount 函数")
})

onUnmounted(() => {
  console.log("执行 onUnmounted 函数")
})
</script>

<template></template>

<style></style>
