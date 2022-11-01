<script setup lang="ts">
import { ref } from "vue"
import ComponentTwo from "./ComponentTwo.vue"
import ComponentThree from "./ComponentThree.vue"
import Props from "./Props.vue"

const Titles = ref([
  { id: 1, title: "我的 Vue 之旅" },
  { id: 2, title: "使用 Vue 写博客" },
  { id: 3, title: "为什么 Vue 如此有趣" },
])
</script>

<template>
  <div>
    <!-- 调用第二个组件 -->
    <ComponentTwo />
    <!-- 调用第三个组件 -->
    <ComponentThree />
    <!-- 同一个组件可以重复调用 -->
    <ComponentTwo />
    <!-- 可以调用多个组件以拼出来整个页面 -->

    <!-- 调用 Props 组件 -->
    <Props Title="Props" Msg="组件之间的交互传递的数据" />
    <!-- 通过 v-for 指令多次调用组件，且多次传递 props -->
    <Props v-for="t in Titles" :key="t.id" :Title="t.title"></Props>
  </div>
</template>

<style></style>
