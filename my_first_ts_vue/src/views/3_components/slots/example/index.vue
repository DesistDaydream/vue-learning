<script setup lang="ts">
import { reactive } from "vue"
import TabelChild from "./Table.vue"

let state = reactive({
  count: 3,
  list: [
    {
      Name: "张三",
      Age: 18,
    },
    {
      Name: "李四",
      Age: 19,
    },
    {
      Name: "王五",
      Age: 20,
    },
  ],
})

const handleEdit = (index: number) => {
  console.log(state.list[index])
}
</script>

<template>
  <h1>插槽案例</h1>
  <!-- 传递 list 这个 Prop -->
  <TabelChild :list="state.list">
    <template #buttons="scope">
      <button @click="handleEdit(scope.index)">编辑</button>
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
