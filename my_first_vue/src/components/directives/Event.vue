<script setup>
// ref() 将传入参数的值包装为一个带 .value 属性的 ref 对象：
import { ref } from 'vue'

const counter = ref(0)
let message = ref("点击前内容")
let args = ref("没有参数")

function clickHandle(event) {
    message.value = "点击后内容"

    // event 是触发事件这个对象
    console.log("点击事件", event)
    event.target.innerHTML = "修改按钮名称"
}

function clickArgs(params) {
    args.value = params
}
</script>

<template>
    <p>使用 v-on 指令（简写为 @）监听 DOM 事件，并在触发事件时执行一些 JavaScript。</p>

    <button v-on:click="counter++">加 1 按钮</button>
    <!-- 可以把 v-on:  简写为 @ -->
    <!-- <button @click="counter++">Add 1</button> -->
    <p>按钮被点击了 {{ counter }} 次.</p>
    <!-- 上面是在标签的属性中执行了 JavaScript 代码，通常都是复杂逻辑，我们不这么用 -->

    <!-- 与 clickHandler() 函数绑定，点击时执行该函数内的代码 -->
    <button @click="clickHandle">点我</button>
    <p>{{ message }}</p>

    <button @click="clickArgs('参数一')">传递事件参数一</button>
    <button @click="clickArgs('参数二')">传递事件参数二</button>
    <p>{{ args }}</p>
</template>