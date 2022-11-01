<script setup lang="ts">
import ComponentTwo from "./ComponentTwo.vue"
import ComponentThree from "./ComponentThree.vue"
import ComponentProps from "./ComponentProps.vue"
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

    <!-- 其他组件调用 -->
    <ComponentProps msg="组件之间的交互传递的数据" />
  </div>
</template>

<style></style>
