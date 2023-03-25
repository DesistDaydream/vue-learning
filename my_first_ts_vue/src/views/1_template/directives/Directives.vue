<script setup lang="ts">
let seen = true
let items = [
  {
    id: 1,
    name: "Foo",
  },
  {
    id: 2,
    name: "Bar",
  },
]
</script>

<template>
  <h1>指令</h1>
  <div>
    指令是带有 v- 前缀的特殊 Attribute(属性)。Vue 提供了许多
    <a href="https://cn.vuejs.org/api/built-in-directives.html">内置指令</a>
    ，包括 Template 组件中学习的 v-bind 和 v-html。 如果把 Vue 当做一种新的编程语言，那指令，就是 Vue 语言的 Keyword(关键字)
  </div>

  <h2>if else</h2>
  <!-- v-if 与 v-else 指令 -->
  <!-- v-if 与 v-show 指令类型，但是又有区别，详见官方文档 -->
  <p v-if="seen">当 seen 变量为 {{ seen }} 时，将会展示本元素。注意，只要变量不为 false，则都为真，比如变量值为整型、字符串，甚至不传递变量值</p>
  <p v-else>当 seen 变量为 {{ seen }} 时，将会展示本元素</p>

  <h2>for</h2>
  <!-- v-for 指令用于列表渲染。https://cn.vuejs.org/guide/essentials/list.html -->
  <ul>
    <li v-for="(item, index) in items">
      {{ index }}
      {{ item.id }}
      {{ item.name }}
    </li>
  </ul>

  <table border="1">
    <thead>
      <tr>
        <th>编号</th>
        <th>名称</th>
      </tr>
    </thead>
    <tbody v-for="item in items">
      <th>{{ item.id }}</th>
      <th>{{ item.name }}</th>
    </tbody>
  </table>
</template>
