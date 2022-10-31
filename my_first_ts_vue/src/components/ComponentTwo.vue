<!-- 一个组件分为三部分 -->
<!-- <script> 标签中是该组件的运行逻辑，通常为 JS 或 TS 代码 -->
<script setup>
</script>

<!-- <template> 标签中是该组件的模板，也就是说应该在页面展示的内容是什么样子的
    模板与下面的样式将会被 Vue 渲染成 HTML 页面 -->
<template>
    <p>组件二</p>
</template>

<!-- <style> 标签中是该组件的样式。若添加了 scoped 属性，则表示该样式只在当前组件中生效。
    否则，这个样式将会被全局应用到，不管是父级还是子级的其他组件 -->
<style scoped>
p {
    color: red;
}
</style>