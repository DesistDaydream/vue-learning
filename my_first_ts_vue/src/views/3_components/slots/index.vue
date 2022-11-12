<script setup lang="ts">
import {} from "vue"
import SlotsChild from "./Slots.vue"
</script>

<template>
  <h1>插槽</h1>
  <p>
    组件可以接收任意类型的 TypeScript 定义的值作为 Props
    并在本组件中使用，但是组件如何接收模板内容呢？在某些场景中，我们可能想要为子租金传递一部分或全部的模板内容，而不是使用
    Props。 这时，可以使用 Slots 来实现。
  </p>

  <div>
    <SlotsChild>
      这部分内容是在父组件中，通过调用子组件时，调用标签中的内容会将子组件中的
      slot 元素替换掉。这里称之为**插槽内容**，而子组件中的 slot
      元素称为**插槽出口**。
    </SlotsChild>
  </div>
</template>

<style scoped></style>
