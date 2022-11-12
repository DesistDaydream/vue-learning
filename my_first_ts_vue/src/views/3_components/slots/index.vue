<script setup lang="ts">
import {} from "vue"
import SlotsChild from "./Slots.vue"
</script>

<template>
  <h1>插槽</h1>

  <div>
    <SlotsChild>
      这部分内容是在父组件中，通过调用子组件时，调用标签中的内容会将子组件中的
      slot 元素替换掉
    </SlotsChild>
  </div>
</template>

<style scoped></style>
