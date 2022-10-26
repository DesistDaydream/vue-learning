<!-- 官方文档，模板语法：https://cn.vuejs.org/guide/essentials/template-syntax.html -->
<template>
    <!-- 1. Text interpolation(文本插值) -->
    <!-- 最基本的数据绑定形式是文本插值，它使用的是 Mustache(双大括号) 语法：
    双大括号标签会被替换为相应组件实例中 msg 属性的值。同时每次 msg 属性更改时它也会同步更新。-->
    <span>文本信息: {{ msg }}</span>

    <!-- 2. 原始 HTML -->
    <!-- 双大括号会将数据解释为纯文本，而不是 HTML。若想插入 HTML，需要使用 v-html 指令： -->
    <p>使用文本插值，插入 HTMl: {{ rawHtml }}</p>
    <p>使用 v-html 指令，插入 HTMl: <span v-html="rawHtml"></span></p>
    <!-- ！！！注意：在网站上动态渲染任意 HTML 是非常危险的，因为这非常容易造成 XSS 漏洞。请仅在内容安全可信时再使用 v-html，并且永远不要使用用户提供的 HTML 内容。 -->

    <!-- 3. Attribute(属性) 绑定 -->
    <!-- 双大括号无法应用在“标签的属性”中，如果想要只渲染属性，则使用 v-bind 指令： -->
    <div v-bind:id="dynamicId"></div>
    <!-- v-bind 可以省略，只使用一个冒号即可 -->

    <!-- 4. 使用 JavaScript 表达式 -->
    <!-- 可以在双大括号中使用 JavaScript 表达式。注意：仅支持“单一表达式”，不要使用复杂的 -->
    {{ number + 1 }}
    {{ ok ? 'ok变量值为 true' : 'ok 变量值为 false ' }}
    {{ message.split('').reverse().join('') }}
    <div :id="`list-${id}`"></div> <!-- 简写的 v-bind 指令 -->

    <!-- 5. Directives(指令) -->
    <!-- 指令是带有 v- 前缀的特殊 attribute。Vue 提供了许多内置指令，包括上面我们所介绍的 v-bind 和 v-html。 -->

</template>

<script>
let needInter = "文本插值"
export default {
    data() {
        return {
            // 文本插值
            msg: needInter,
            // 原始 HTML
            rawHtml: "<a href='https://github.com/DesistDaydream'>DesistDaydream</a>",
            // 属性绑定
            dynamicId: 102205,
            // 使用 JavaScript 表达式
            number: 10,
            ok: true,
            message: "Hello World",
            id: "DD"
            // 指令
        }
    }
}
</script>

