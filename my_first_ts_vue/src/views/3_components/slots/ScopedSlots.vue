<script setup lang="ts">
import {} from "vue"
const slotsMsg = "子组件中具名插槽的内容"
const namedSlotsMsg = "子组件中具名插槽的内容"
</script>

<template>
  <!-- 我们可以像 Props 似的，让子组件在渲染是将一部分数据提供给插槽
   -->
  <div>
    <!-- slot 元素中的属性值将会被父组件收集，这里的 text 和 count 都可以被父组件的 v-slot 指令收集到 -->
    <slot :text="slotsMsg" count="1"></slot>
    <slot name="header" :msg="namedSlotsMsg"></slot>
    <!-- name 属性是插槽的 ID，不会作为 Prop 传递到父组件 -->
    <slot name="footer" :msg="namedSlotsMsg"></slot>
  </div>
</template>

<style scoped></style>
