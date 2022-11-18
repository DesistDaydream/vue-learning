<!-- 组件之间的交互 -->
<script setup lang="ts">
// defineProps 是一个仅在 <script setup> 中可用的编译宏命令。
// 声明的 props 会自动暴露给模板，并且这些变量不用再通过 ref() 声明或赋值，这已经是响应式的了
// 这里定义了两个 Props，title 和 msg，其中 msg 是可选的
defineProps<{
  title: string
  // 使用 ? 表示该属性是可选的，即.可以不传递该属性
  msg?: string
}>()

// 若想在 <script> 中引用 props，可以使用 props 变量，需要为 defineProps 指定接收返回值的变量，详见 PassingProps.vue 中的代码
</script>

<template>
  <!-- 我们可以在在模板中直接使用 defineProps() 声明的 Props -->
  <p>名为 title 的 Prop 的值：{{ title }}</p>
  <p>名为 msg 的 Prop 的值：{{ msg }}</p>
</template>

<style scoped></style>
