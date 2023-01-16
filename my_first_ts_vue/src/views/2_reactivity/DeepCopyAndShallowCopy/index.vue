<script setup lang="ts">
import { ref, toRefs, reactive } from "vue"
import Child from "./Child.vue"
import type { ObjIf } from "./ObjIf"

const obj = ref<ObjIf>({
  name: "zhangsan",
  age: 18,
  info: {
    address: "beijing",
  },
})

let refObj = toRefs(obj)
</script>

<template>
  <Child :refObj="refObj"></Child>
</template>

<style scoped></style>
