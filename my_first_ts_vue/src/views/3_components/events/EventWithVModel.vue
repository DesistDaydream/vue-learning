<script setup lang="ts">
import {} from "vue"
let props = withDefaults(defineProps<{ num: number }>(), {
  num: 100,
})

const emit = defineEmits<{
  // update 事件，用于更新父组件中的 num 值
  (event: "update:num", value: number): void
}>()

let n = props.num

let handleClick = () => {
  n++
  emit("update:num", n)
}
</script>

<template>
  <div>
    <p>子组件 {{ num }}</p>
    <button @click="handleClick">按钮</button>
  </div>
</template>

<style scoped></style>
