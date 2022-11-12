<!-- script 标签中写具体业务逻辑 -->
<script setup lang="ts">
let msg = "Hello Vue!"
</script>

<!-- template 标签中写 HTMl -->
<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<style scoped>
h1 {
  /* 居中 */
  text-align: center;
}
</style>
