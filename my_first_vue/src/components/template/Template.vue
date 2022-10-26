<script setup>
import Directives from './Directives.vue'

// 文本插值
let msg = "文本插值"
// 原始 HTML
let rawHtml = "<a href='https://github.com/DesistDaydream'>DesistDaydream</a>"
// 属性绑定
let dynamicId = 102205
// 使用 JavaScript 表达式
let number = 10
let ok = true
let message = "Hello World"
let id = "DesistDaydream"
// 指令
let seen = true

</script>

<!-- 官方文档，模板语法：https://cn.vuejs.org/guide/essentials/template-syntax.html -->
<template>
    <!-- 1. Text interpolation(文本插值) -->
    <!-- 最基本的数据绑定形式是文本插值，它使用的是 Mustache(双大括号) 语法：
    双大括号标签会被替换为相应组件实例中 msg 属性的值。同时每次 msg 属性更改时它也会同步更新。-->
    <span>文本信息: {{ msg }}</span>

    <!-- 2. 原始 HTML -->
    <!-- 双大括号会将数据解释为纯文本，而不是 HTML。若想插入 HTML，需要使用 v-html 指令： -->
    <p>插入 HTML(使用文本插值): {{ rawHtml }}</p>
    <p>插入 HTML(使用 v-html 指令): <span v-html="rawHtml"></span></p>
    <!-- ！！！注意：在网站上动态渲染任意 HTML 是非常危险的，因为这非常容易造成 XSS 漏洞。请仅在内容安全可信时再使用 v-html，并且永远不要使用用户提供的 HTML 内容。 -->

    <!-- 3. Attribute(属性) 绑定 -->
    <!-- 双大括号无法应用在“标签的属性”中，如果想要只渲染属性，则使用 v-bind 指令： -->
    <div v-bind:id="dynamicId">查看该元素标签的属性，以查看属性绑定示例</div>
    <!-- v-bind 可以省略，只使用一个冒号即可 -->

    <!-- 4. 使用 JavaScript 表达式 -->
    <!-- 可以在双大括号中使用 JavaScript 表达式。注意：仅支持“单一表达式”，不要使用复杂的 -->
    <p>JavaScript 表达式: {{ number + 1 }}</p>
    <p>JavaScript 表达式: {{ ok ? 'ok变量值为 true' : 'ok 变量值为 false ' }}</p>
    <p>JavaScript 表达式: {{ message.split('').reverse().join('') }}</p>
    <p :id="`list-${id}`">JavaScript 表达式: 在标签的属性中查看示例效果</p> <!-- 简写的 v-bind 指令 -->

    <!-- 5. Directives(指令) -->
    <div>
        <Directives />
    </div>

</template>
