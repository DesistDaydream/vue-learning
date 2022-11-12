<!-- 这里是 Vue 程序的**根组件**。这个根组件被绑定到了 index.html 中 id=app 的 div 元素上
对于 index.html 来说，body 中只有一个 div 元素。也就是说，这个根组件即代表了整个 index.html 页面 -->

<!-- 每个组件可以分为三部分：<script>、<template>、<style> -->
<!-- <script> 标签中是该组件的运行逻辑，通常为 JS 或 TS 代码 -->
<script setup lang="ts">
// 导入组件。这些组件作为根组件的下级组件
// 我们可以通过注释这几行导入，查看这些组件都对应页面的哪些部分
import HelloWorld from "./views/HelloWorld.vue"

// 路由功能不建议刚开始就使用，可以先通过导入多个组件来体验 Vue 的组件化开发能力
import { RouterLink, RouterView } from "vue-router"

// 使用 element plus 的导航栏
import { ref } from "vue"
const activeIndex = ref()
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
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
  <el-menu
    :default-active="activeIndex"
    router
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
  >
    <el-menu-item index="home" route="/home">首页</el-menu-item>

    <el-sub-menu index="template">
      <template #title>模板</template>
      <el-menu-item index="template" route="/template">模板基础</el-menu-item>
      <el-sub-menu index="directives">
        <template #title>指令</template>
        <el-menu-item index="directives" route="/directives">
          指令基础
        </el-menu-item>
        <el-menu-item index="directives-event" route="/directives/event">
          事件
        </el-menu-item>
        <el-menu-item index="directives-form" route="/directives/form">
          表单
        </el-menu-item>
        <el-sub-menu index="3-1">
          <template #title>第三项</template>
        </el-sub-menu>
      </el-sub-menu>
    </el-sub-menu>

    <el-menu-item index="reactivity" route="/reactivity">响应式</el-menu-item>

    <el-sub-menu index="components">
      <template #title><RouterLink to="/components">组件</RouterLink></template>
      <el-sub-menu index="props">
        <template #title>
          <RouterLink to="/components/props">Props</RouterLink>
        </template>
        <el-menu-item index="props-validation">Props校验</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="events">
        <template #title>
          <RouterLink to="/components/events">事件(自定义事件)</RouterLink>
        </template>
        <el-menu-item index="events-validation">事件校验</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="slots">
        <template #title>
          <RouterLink to="/components/slots">插槽</RouterLink>
        </template>
        <el-menu-item index="slots-other">其他</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>

    <el-sub-menu index="third">
      <template #title>第三方组件</template>
      <el-menu-item index="third" route="/third">第三方组件</el-menu-item>
      <el-menu-item index="third-table" route="/third/table">表格</el-menu-item>
      <el-sub-menu index="2-1">
        <template #title>第二项</template>
      </el-sub-menu>
    </el-sub-menu>

    <el-menu-item index="http" route="/http">HTTP请求</el-menu-item>

    <el-menu-item index="lifecycle" route="/lifecycle">
      生命周期钩子
    </el-menu-item>

    <el-menu-item index="test" route="/test">测试页面</el-menu-item>
  </el-menu>

  <RouterView />
</template>

<!-- <style> 标签中是该组件的样式。若添加了 scoped 属性，则表示该样式只在当前组件中生效。
        否则，这个样式将会被全局应用到，不管是父级还是子级的其他组件 -->
<style scoped>
ul {
  border-radius: 15px; /* 圆角 */
  /* list-style-type: none;
  margin: 0;
  padding: 0; */
  overflow: hidden;
}

/* RouterLink 的文本会被渲染成 a 标签，通过对 a 标签的设置，来这是带链接的字符串的样式 */
a {
  text-decoration: none;
  color: #fff;
}
</style>
