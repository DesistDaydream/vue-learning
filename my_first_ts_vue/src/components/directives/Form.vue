<script setup>
import { ref } from "vue"

// 初始化表单中的变量，设为空
let message = ref("")
let resp = ref({})

function commit(params) {
  console.log(params)
  resp.value = JSON.parse(params)
}
</script>

<template>
  <h1>表单输入绑定</h1>
  <p>使用 v-model 指令可以简化 JavaScript 处理表单的逻辑。</p>
  <p>
    通过 v-model 指令在 input、textarea、select 这几个表单标签中创建双向数据绑定
  </p>
  <p>v-model 指令会监听用户的输入事件来更新数据，并在特殊场景下执行特殊处理</p>

  卡组：<textarea
    v-model="message"
    placeholder="输入内容"
    cols="45"
    rows="5"
  ></textarea>
  <button @click="commit(message)">提交</button>
  <!-- 双向绑定，表单中的数据可以被 script 和 template 都读取到 -->
  <p>表单内容: {{ message }}</p>

  <table border="1">
    <thead>
      <tr>
        <th>最低价</th>
        <th>集换价</th>
      </tr>
    </thead>
    <tr>
      <th>{{ resp.min_price }}</th>
      <th>{{ resp.avg_price }}</th>
    </tr>
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
    <tbody>
      <tr v-for="(item, _) in resp.data">
        <th>{{ item.sc_name }}</th>
        <th>{{ item.count }}</th>
        <th>{{ item.serial }}</th>
        <th>{{ item.min_price }}</th>
        <th>{{ item.avg_price }}</th>
      </tr>
    </tbody>
  </table>
</template>

<!-- 表单中填入的示例数据 -->
<!--
{
    "min_price": "110.61",
    "avg_price": "222.60",
    "data": [
        {
            "count": 3,
            "serial": "ST4-01",
            "sc_name": "年糕兽",
            "alternative_art": "否",
            "min_price": "0.30",
            "avg_price": "1.50"
        },
        {
            "count": 2,
            "serial": "BT3-004",
            "sc_name": "蓑虫兽",
            "alternative_art": "否",
            "min_price": "1.00",
            "avg_price": "3.80"
        },
        {
            "count": 4,
            "serial": "BT1-064",
            "sc_name": "哥布林兽",
            "alternative_art": "否",
            "min_price": "0.04",
            "avg_price": "2.00"
        }
    ]
}
-->
