<!-- 这里是 Vue 程序的根组件。这个跟根组件被绑定到了 index.html 中 id=app 的 div 元素上
也就是说，这就是说，根组件即代表了整个页面 -->
<script setup>

// 路由功能不建议刚开始就使用，可以通过导入多个组件来体验 Vue 的组件化开发能力
import { RouterLink, RouterView } from 'vue-router'

// 导入组件。这些组件作为根组件的下级组件
// 我们可以通过注释这几行导入，查看这些组件都对应页面的哪些部分
import HelloWorld from './components/hello_world/HelloWorld.vue'
import ComponentTwo from './components/ComponentTwo.vue'
import ComponentThree from './components/ComponentThree.vue'

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <!-- 调用 HelloWorld 组件。并将 msg 变量的值传入到 HelloWorld 组件中 -->
      <HelloWorld msg="You did it!" />
      <!-- 调用第二个组件 -->
      <ComponentTwo />
      <!-- 调用第三个组件 -->
      <ComponentThree />
      <!-- 同一个组件可以重复调用 -->
      <ComponentTwo />
      <!-- 可以调用多个组件以拼出来整个页面 -->

      <!-- Vue 的路由器功能。可以在单个 html 中达到切换标签页功能的能力 -->
      <nav>
        <RouterLink to="/">Hemo</RouterLink> |
        <RouterLink to="/template">模板</RouterLink> |
        <RouterLink to="/directives">指令</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

