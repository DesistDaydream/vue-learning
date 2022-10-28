<script setup lang="ts">
import axios, { AxiosResponse } from "axios"
import { ref } from "vue"

let respBody: any = ref({})

let req = axios({
  method: "get",
  url: "http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php",
})

req.then((resp: AxiosResponse) => {
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
