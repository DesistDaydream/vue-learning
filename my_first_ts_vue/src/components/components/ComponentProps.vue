<!-- 组件之间的交互 -->
<script setup lang="ts">
// 父、子组件之间的值传递
defineProps({
  // 定义组件交互时传递数据的变量名
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <p>{{ msg }}</p>
</template>

<style scoped></style>
