<script setup lang="ts">
import {} from "vue"
</script>

<template>
  <div>
    <!-- 当子组件被调用时，子组件中 <slot> 元素将会被父组件的插槽内容替换掉。
    而 slot 元素中的内容将不会显示  -->
    <p>slot 元素仅仅作为一个**占位符**，将会在被调用时替换掉</p>
    <slot>slot 整个元素都将被替换</slot>
    <!-- 顾名思义，slot(插槽) 就像插槽一样，调用时的内容可以被插入到 slot 中。slot 元素标识了父组件中提供的插槽内容将在哪里被渲染  -->
  </div>
</template>

<style scoped></style>
