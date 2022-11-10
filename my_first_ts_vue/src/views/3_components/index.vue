<script setup lang="ts">
import {} from "vue"
import ComponentTwo from "@/components/ComponentTwo.vue"
import ComponentThree from "@/components/ComponentThree.vue"
</script>

<template>
  <h1>组件的基本调用</h1>
  <div>
    <!-- 调用第二个组件 -->
    <ComponentTwo />
    <!-- 调用第三个组件 -->
    <ComponentThree />
    <!-- 同一个组件可以重复调用 -->
    <ComponentTwo />
    <!-- 可以调用多个组件以拼出来整个页面 -->
  </div>
</template>

<style></style>
