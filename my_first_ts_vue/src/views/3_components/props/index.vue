<script setup lang="ts">
import { ref } from "vue"
import PassingPropsDemo from "@/views/3_components/props/PassingProps.vue"
import PassingPropsDemoWithVfor from "@/views/3_components/props/PassingPropsWithVfor.vue"

let title = "动态标题"
let msg = "动态内容"

// 通过 v-for 指令传递 Props
const Titles = ref([
  { id: 1, title: "我的 Vue 之旅" },
  { id: 2, title: "使用 Vue 写博客" },
  { id: 3, title: "为什么 Vue 如此有趣" },
])
</script>

<template>
  <h1>Props</h1>
  <p>
    如果我们正在构建一个博客，我们可能需要一个表示博客文章的组件。
    我们希望所有的博客文章分享相同的视觉布局，但有不同的内容。
    要实现这样的效果自然必须**向组件中传递数据**，例如每篇文章标题和内容，这就会使用到
    props。 props 全名 properties，是一种特别的 Attributes(属性)
  </p>
  <p>
    Props
    传递可以直接简单粗暴得理解为值传递，值传递在编程中是最基本最常见的行为。
  </p>

  <h2>Props 传递</h2>
  在调用组件时，可以在调用组件的标签上添加属性，这些属性就是被调用组件中通过
  defineProps() 定义的 Prop。比如这里的 `title` 属性就是一个
  Prop，在被调用组件中，通过 defineProps() 定义了一个名为 title 的
  Prop；此时这里 `title`` 属性的值就会被传递到被调用组件中 title 这个 Prop 中。

  <h2>静态 Props 传递</h2>
  <PassingPropsDemo title="静态的值"></PassingPropsDemo>

  <h2>动态 Props 传递</h2>
  在“调用组件元素”的属性中，可以使用 v-bind 指令将数据动态绑定到子组件的 Props
  上。**这是 Vue 开发中最常见的 Props 传递方式。**
  <PassingPropsDemo :title="title" :msg="msg"></PassingPropsDemo>

  <h2>通过 v-for 传递 Props</h2>
  <!-- 通过 v-for 指令多次调用组件，且多次传递 props -->
  <PassingPropsDemoWithVfor
    v-for="t in Titles"
    :key="t.id"
    :title="t.title"></PassingPropsDemoWithVfor>
</template>

<style scoped></style>
