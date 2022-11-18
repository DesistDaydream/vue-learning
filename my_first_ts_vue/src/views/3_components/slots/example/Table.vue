<script setup lang="ts">
import {} from "vue"
defineProps<{
  list: SlotTable[]
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
      <td>{{ item.Name }}</td>
      <td>{{ item.Age }}</td>
      <td>
        <slot name="buttons" :index="index"></slot>
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
  /* 单元格边框样式 */
  border: 1px solid #000;
  border-collapse: collapse;
}
th,
td {
  /* 填充单元格，即设置单元格中边框与文字之间的间距 */
  padding: 10px;
}
</style>
