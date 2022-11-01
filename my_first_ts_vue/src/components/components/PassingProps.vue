<!-- 组件之间的交互 -->
<!-- 如果我们正在构建一个博客，我们可能需要一个表示博客文章的组件。
  我们希望所有的博客文章分享相同的视觉布局，但有不同的内容。
  要实现这样的效果自然必须向组件中传递数据，例如每篇文章标题和内容，这就会使用到 props。
  props 全名 properties，是一种特别的 Attributes(属性)  -->
<script setup lang="ts">
// defineProps 是一个仅在 <script setup> 中可用的编译宏命令。
// 声明的 props 会自动暴露给模板
// defineProps({
//   // 定义组件交互时传递数据的变量信息
//   msg: {
//     type: String,
//     required: true,
//   },
// })

// defineProps 会返回一个对象，该对象包含了所有 props 的类型定义。
const props = defineProps({
  Title: {
    type: String,
    required: true,
  },
  Msg: {
    type: String,
  },
})

console.log(props)
</script>

<template>
  <h1>{{ Title }}</h1>
  <p>{{ Msg }}</p>
</template>

<style scoped></style>
