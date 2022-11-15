<script setup lang="ts">
import { ref } from "vue"
import PassingPropsDemo from "@/views/3_components/props/PassingProps.vue"
import PassingPropsDemoWithVfor from "@/views/3_components/props/PassingPropsWithVfor.vue"

// 通过 v-for 指令传递 Props
const Titles = ref([
  { id: 1, title: "我的 Vue 之旅" },
  { id: 2, title: "使用 Vue 写博客" },
  { id: 3, title: "为什么 Vue 如此有趣" },
])
</script>

<template>
  <h2>Props 传递</h2>
  <PassingPropsDemo
    title="组件之间的交互传递的数据"
    msg="组件之间的交互传递的数据" />

  <h2>通过 v-for 传递 Props</h2>
  <!-- 通过 v-for 指令多次调用组件，且多次传递 props -->
  <PassingPropsDemoWithVfor
    v-for="t in Titles"
    :key="t.id"
    :title="t.title"></PassingPropsDemoWithVfor>
</template>

<style scoped></style>
