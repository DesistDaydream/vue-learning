<!-- 这里是 Vue 程序的**根组件**。这个根组件被绑定到了 index.html 中 id=app 的 div 元素上
对于 index.html 来说，body 中只有一个 div 元素。也就是说，这个根组件即代表了整个 index.html 页面 -->

<!-- 每个组件可以分为三部分：<script>、<template>、<style> -->
<!-- <script> 标签中是该组件的运行逻辑，通常为 JS 或 TS 代码 -->
<script setup lang="ts">
// 导入组件。这些组件作为根组件的下级组件
// 我们可以通过注释这几行导入，查看这些组件都对应页面的哪些部分
import HelloWorld from "./components/HelloWorld.vue"

// 路由功能不建议刚开始就使用，可以先通过导入多个组件来体验 Vue 的组件化开发能力
import { RouterLink, RouterView } from "vue-router"
</script>

<!-- <template> 标签中是该组件的模板，也就是说应该在页面展示的内容是什么样子的
    模板与下面的样式将会被 Vue 渲染成 HTML 页面 -->
<template>
  <header>
    <div>
      <!-- 调用 HelloWorld 组件。 -->
      <HelloWorld />
    </div>
  </header>

  <!-- Vue 的路由器功能。可以在单个 html 中达到切换标签页功能的能力 -->
  <!-- 初学 Vue 不要关注这部分内容，这是 Vue 单页应用的特点，先研究完其他的有概念了之后再看 Vue 路由功能 -->
  <!-- 导航栏与下拉菜单示例来源：http://www.manongjc.com/runcode/358.html -->
  <ul>
    <li><RouterLink to="/home">首页</RouterLink></li>

    <li><RouterLink to="/template">模板</RouterLink></li>

    <li>
      <div class="dropdown">
        <RouterLink to="/directives">指令</RouterLink>
        <div class="dropdown-content">
          <RouterLink to="/directives/event">事件</RouterLink>
          <RouterLink to="/directives/form">表单</RouterLink>
        </div>
      </div>
    </li>

    <li><RouterLink to="/components">组件</RouterLink></li>

    <li>
      <div class="dropdown">
        <a href="#" class="dropbtn">第三方组件</a>
        <div class="dropdown-content">
          <RouterLink to="/third">第三方组件</RouterLink>
          <RouterLink to="/third/table">表格</RouterLink>
        </div>
      </div>
    </li>

    <li><RouterLink to="/http">HTTP请求</RouterLink></li>
    <li><RouterLink to="/lifecycle">生命周期钩子</RouterLink></li>
    <li><RouterLink to="/test">测试页面</RouterLink></li>
  </ul>

  <RouterView />
</template>

<!-- <style> 标签中是该组件的样式。若添加了 scoped 属性，则表示该样式只在当前组件中生效。
        否则，这个样式将会被全局应用到，不管是父级还是子级的其他组件 -->
<style scoped>
ul {
  border-radius: 15px; /* 圆角 */
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a,
.dropbtn {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover,
.dropdown:hover .dropbtn {
  background-color: #111;
}

.dropdown {
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
