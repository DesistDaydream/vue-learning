<script setup lang="ts">
import axios from "axios"
import { ref } from "vue"

axios.defaults.withCredentials = false

let respBody: any = ref({})

let req = axios({
  method: "get",
  // url: "/api/FingerUnion/list.php",
  url: "http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php",
})

req.then((resp) => {
  console.log(resp.data)
  respBody.value = resp.data
})
</script>

<template>
  <h1>通过 Axios 发起 HTTP 请求</h1>
  <p>Axios 是一个第三方 HTTP 客户端库，需要使用 pnpm i axios 进行安装</p>
  <p>响应体：{{ respBody }}</p>
</template>

<style></style>
