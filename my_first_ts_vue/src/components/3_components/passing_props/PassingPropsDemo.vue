<!-- 组件之间的交互 -->
<!-- 如果我们正在构建一个博客，我们可能需要一个表示博客文章的组件。
  我们希望所有的博客文章分享相同的视觉布局，但有不同的内容。
  要实现这样的效果自然必须向组件中传递数据，例如每篇文章标题和内容，这就会使用到 props。
  props 全名 properties，是一种特别的 Attributes(属性)  -->
<script setup lang="ts">
// defineProps 是一个仅在 <script setup> 中可用的编译宏命令。
// 声明的 props 会自动暴露给模板，并且这些变量不用再通过 ref() 声明或赋值，这已经是响应式的了
defineProps<{
  title: string
  // 使用 ? 表示该属性是可选的，即.可以不传递该属性
  msg?: string
}>()

// 若想在 <script> 中引用 props，可以使用 props 变量，需要为 defineProps 指定接收返回值的变量，详见 PassingProps.vue 中的代码
</script>

<template>
  <h5>标题：{{ title }}</h5>
  <p>内容：{{ msg }}</p>
</template>

<style scoped></style>
