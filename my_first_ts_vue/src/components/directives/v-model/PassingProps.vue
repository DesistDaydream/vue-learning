<script setup lang="ts">
import { ref } from "vue"
import AppChild from "./PassingPropsChild.vue"
let num = ref(20)
</script>

<template>
  <div>
    <AppChild v-model:num="num" />
  </div>
</template>

<style scoped></style>
