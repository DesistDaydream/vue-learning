<!-- 组件之间的交互 -->
<script setup>
// 父、子组件之间的值传递
defineProps({
    msg: {
        type: String,
        required: true
    }
})
</script>

<template>
    <p>{{ msg }}</p>
</template>

<style>

</style>