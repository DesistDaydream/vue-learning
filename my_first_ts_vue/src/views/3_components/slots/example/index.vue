<script setup lang="ts">
import { reactive } from "vue"
import TabelChild from "./Table.vue"

let state = reactive({
  name: "张三",
  age: 18,
  list: [
    {
      name: "张三",
      age: 18,
    },
    {
      name: "李四",
      age: 19,
    },
    {
      name: "王五",
      age: 20,
    },
  ],
})
</script>

<template>
  <h1>插槽案例</h1>
  <!-- 传递 list 这个 Prop -->
  <TabelChild :list="state.list">
    <template #buttons>
      <button>编辑</button>
    </template>
  </TabelChild>

  <TabelChild :list="state.list">
    <template #buttons>
      <button>编辑</button>
      <button>删除</button>
    </template>
  </TabelChild>
</template>

<style scoped></style>
