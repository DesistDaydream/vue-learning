<script setup lang="ts"></script>

<template>
  <h1>响应式</h1>
  <p>
    <a href="https://cn.vuejs.org/guide/essentials/reactivity-fundamentals.html"
      >响应式</a
    >
    是 Vue 的核心功能之一，它可以让我们在数据发生变化时，自动更新页面中的内容。
  </p>
  <p>
    在 Vue 中，响应式是通过 Proxy 实现的。Proxy 是 ES6
    中新增的一个特性，它可以用来拦截对象的读写操作。
  </p>
  <p>在 Vue 中，我们可以通过 Proxy 来监听对象的读写操作，从而实现响应式。</p>
</template>

<style></style>
