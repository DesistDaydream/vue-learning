<!-- 这里是 Vue 程序的根组件。这个跟根组件被绑定到了 index.html 中 id=app 的 div 元素上
也就是说，这就是说，根组件即代表了整个页面 -->
<script setup>
// 这里导入根组件下的组件
// 我们可以通过注释这几行导入，查看这些组件都对应页面的哪些部分
import HelloWorld from './components/1_HelloWorld.vue'
import TemplateLearn from './components/2_Template.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <!-- 将 msg 变量的值传入到 HelloWorld 组件中 -->
      <HelloWorld msg="You did it!" />
      <!-- Vue 模板语法学习 -->
      <TemplateLearn />
    </div>
  </header>
</template>

<style scoped>

</style>
