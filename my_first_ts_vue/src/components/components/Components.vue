<script setup lang="ts">
import ComponentTwo from "./ComponentTwo.vue"
import ComponentThree from "./ComponentThree.vue"
import Props from "./Props.vue"
</script>

<template>
  <div>
    <!-- 调用第二个组件 -->
    <ComponentTwo />
    <!-- 调用第三个组件 -->
    <ComponentThree title="abc" />
    <!-- 同一个组件可以重复调用 -->
    <ComponentTwo />
    <!-- 可以调用多个组件以拼出来整个页面 -->

    <!-- 调用 Props 组件 -->
    <Props Title="Props" Msg="组件之间的交互传递的数据" />
  </div>
</template>

<style></style>
