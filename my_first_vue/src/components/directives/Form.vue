<script setup>
import DirectivesRoute from './Route.vue'
import { ref } from 'vue'

// 初始化表单中的变量，设为空
let message = ref('')

function commit(params) {
}

</script>

<template>
    <DirectivesRoute />

    <h1>表单输入绑定</h1>
    <p>使用 v-model 指令可以简化 JavaScript 处理表单的逻辑。</p>
    <p>通过 v-model 指令在 input、textarea、select 这几个表单标签中创建双向数据绑定</p>
    <p>v-model 指令会监听用户的输入事件来更新数据，并在特殊场景下执行特殊处理</p>

    卡组：<textarea v-model="message" placeholder="输入内容" cols="45" rows="5"></textarea>
    <button @click="commit">提交</button>
    <!-- 双向绑定，表单中的数据可以被 script 和 template 都读取到 -->
    <p>表单内容: {{ message }}</p>


    <table border="1">
        <thead>
            <tr>
                <th>最低价</th>
                <th>集换价</th>
            </tr>
        </thead>
        <tr id="resp_price"></tr>
    </table>

    <table border="1">
        <thead>
            <tr>
                <th>名称</th>
                <th>数量</th>
                <th>编号</th>
                <th>最低价</th>
                <th>集换价</th>
            </tr>
        </thead>
        <tbody id="cards_list"></tbody>
    </table>
</template>