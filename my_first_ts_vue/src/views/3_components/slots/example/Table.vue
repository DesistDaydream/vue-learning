<script setup lang="ts">
import {} from "vue"
defineProps<{
  list: { name: string; age: number }[]
}>()
</script>

<template>
  <table>
    <tr>
      <th>姓名</th>
      <th>年龄</th>
      <th>操作</th>
    </tr>
    <tr v-for="(item, index) in list" :key="index">
      <td>{{ item.name }}</td>
      <td>{{ item.age }}</td>
      <td>
        <button>编辑</button>
        <button>删除</button>
      </td>
    </tr>
  </table>
</template>

<style scoped>
table {
  border-collapse: collapse;
}
table,
th,
td {
  border: 1px solid #000;
  border-collapse: collapse;
}
th,
td {
  /* 填充单元格，即设置单元格中边框与文字之间的间距 */
  padding: 10px;
}
</style>
