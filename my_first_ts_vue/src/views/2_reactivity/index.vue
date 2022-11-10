<script setup lang="ts">
import { ref } from "vue"
import Reactivity from "@/views/2_reactivity/Reactivity.vue"
import RefGetElement from "@/views/2_reactivity/RefGetElement.vue"
import RefAndReactiveVue from "@/views/2_reactivity/RefAndReactive.vue"
import Watch from "@/views/2_reactivity/Watch.vue"
import Computed from "@/views/2_reactivity/Computed.vue"
</script>

<template>
  <h1>响应式</h1>

  <h2>基本用法</h2>
  <div><Reactivity /></div>

  <h2>使用 ref() 函数获取页面中的元素</h2>
  <div><RefGetElement /></div>

  <h2>ref() 与 reactive() 的区别</h2>
  <div><RefAndReactiveVue /></div>

  <h2>watch() 监听数据变化</h2>
  <div><Watch /></div>

  <h2>computed() 数据计算</h2>
  <div><Computed /></div>
</template>

<style scoped></style>
