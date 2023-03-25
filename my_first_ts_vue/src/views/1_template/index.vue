<script setup lang="ts">
// 文本插值
const msg: string = "文本插值"
// 原始 HTML
const rawHtml = "<a href='https://github.com/DesistDaydream'>DesistDaydream</a>"
// 属性绑定
const dynamicId = "102205"
// 使用 JavaScript 表达式
const number = 10
const ok = true
const message = "Hello World"
const id = "DesistDaydream"
</script>

<!-- 官方文档，模板语法：https://cn.vuejs.org/guide/essentials/template-syntax.html -->
<template>
  <h1>Vue 模板基础示例</h1>

  <h2>Text interpolation(文本插值)</h2>
  <!-- 最基本的数据绑定形式是文本插值，它使用的是 Mustache(双大括号) 语法：
    双大括号标签会被替换为相应组件实例中 msg 属性的值。同时每次 msg 属性更改时它也会同步更新。-->
  <span>文本信息: {{ msg }}</span>

  <h2>原始 HTML</h2>
  <!-- 双大括号会将数据解释为纯文本，而不是 HTML。若想插入 HTML，需要使用 v-html 指令： -->
  <p>插入 HTML(使用文本插值): {{ rawHtml }}</p>
  <p>
    插入 HTML(使用 v-html 指令):
    <span v-html="rawHtml"></span>
  </p>
  <!-- ！！！注意：在网站上动态渲染任意 HTML 是非常危险的，因为这非常容易造成 XSS 漏洞。请仅在内容安全可信时再使用 v-html，并且永远不要使用用户提供的 HTML 内容。 -->

  <h2>Attribute(属性) 绑定</h2>
  <p>我们可以通过 v-bind 指令在元素的属性上绑定任意值</p>
  <!-- 双大括号无法应用在“标签的属性”中，如果想要只渲染属性，则使用 v-bind 指令： -->
  <div v-bind:id="dynamicId">查看该元素标签的 id 属性，以检查属性绑定结果</div>
  <!-- v-bind 可以省略，只使用一个冒号表示即可，简写为 :id -->

  <p>注意：v-bind 是 Vue 中组件间数据传递的最常见用法，常用来传递 Props， 它的省略形式在 Vue 中随处可见。在元素标签中总是会看见 : 这个符号。</p>
  <p>Props 是 Vue 组件中的核心概念之一</p>
  <p>v-bind 中 = 后面的内容通常都是变量，这个变量可以是 script 元素内声明的，也可以是在 template 元素内通过表达式声明的</p>

  <h2>在模板中使用 JavaScript 表达式</h2>
  <!-- 可以在双大括号中使用 JavaScript 表达式。注意：仅支持“单一表达式”，不要使用复杂的 -->
  <p>JavaScript 表达式: {{ number + 1 }}</p>
  <p>JavaScript 表达式: {{ ok ? "ok变量值为 true" : "ok 变量值为 false " }}</p>
  <p>JavaScript 表达式: {{ message.split("").reverse().join("") }}</p>
  <p :id="`list-${id}`">JavaScript 表达式: 在标签的属性中查看示例效果</p>
  <!-- 简写的 v-bind 指令 -->
</template>
