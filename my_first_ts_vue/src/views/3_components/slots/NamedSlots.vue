<script setup lang="ts">
import {} from "vue"
</script>

<template>
  <h2>具名插槽</h2>
  <p>
    子组件若包含多个 slot 元素，那么这些 slot
    将会如何确定自己将要接收的插槽内容是什么呢？
  </p>

  <p>
    通过 slot 元素中的 name 属性，我们可以给每个插槽分配一个 ID。这种具有 ID
    的插槽称为 **Named Slots(具名插槽)**；任何没有显式得指定 name 属性的 slot
    元素，其 name 属性的值默认为 default。
  </p>

  <p>
    对于父元素来说，如果想要对应到指定 ID 的插槽，则需要在调用子组件时使用
    template 元素中的 v-slot 指令，v-slot 指令的值就是插槽 ID
  </p>

  <div class="container">
    <header>
      <!-- 标题内容放这里 -->
      <!-- name 的值就是 slot 的 ID -->
      <slot name="header"></slot>
    </header>
    <main>
      <!-- 主要内容放这里 -->
      <slot></slot>
    </main>
    <footer>
      <!-- 底部内容放这里 -->
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style scoped></style>
