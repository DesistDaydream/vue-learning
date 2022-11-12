<script setup lang="ts">
import {} from "vue"
import SlotsChild from "./Slots.vue"
import NamedSlotsChild from "./NamedSlots.vue"
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

  <div>
    <NamedSlotsChild>
      <!-- v-slot 指令指定插槽的 ID，这部分内容将会代替 NamedSlotsChild 这个子组建中 ID 为 header 的 <slot> 元素 -->
      <template v-slot:header>
        <h3>头</h3>
      </template>

      <!-- 当一个组件同时接收默认插槽和具名插槽时，所有位于顶级的非 <template> 元素都被隐式地视为默认插槽的内容。 -->
      内容

      <!-- v-slot 指令可以简写为 # -->
      <!-- 这部分的意思是：将这部分模板片段传入子组件中的 footer 插槽中 -->
      <template #footer>
        <h4>尾</h4>
      </template>
    </NamedSlotsChild>
  </div>
</template>

<style scoped></style>
