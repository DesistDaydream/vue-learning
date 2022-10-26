<!-- script 标签中写具体业务逻辑 -->
<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<!-- template 标签中写 HTMl -->
<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
  </div>
</template>

<style scoped>

</style>
