<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue"
// 我们可以使用 ref() 函数获取页面中的元素
// 通过 ref() 方法绑定 <template> 中属性包含 ref="op" 的元素
// 注意：变量的名称要与元素中 ref 属性的值相同，才能绑定成功
let op = ref()
console.log("模板挂载之前无法获取到元素的具体内容：", op.value) // 这个时候 op.value 是 undefined，因为这个时候页面还没有渲染出来。
// 想要获取到 op.value 的值，可以在 onMounted 钩子函数中获取
// onMounted 钩子函数会在页面渲染完成后执行
onMounted(() => {
  console.log("在 onMounted 函数中获取到值：", op.value) // 这个时候 op.value 是一个 DOM 对象，因为页面已经渲染出来了。
})
// 在下一个 DOM 更新时执行的 nextTick() 函数中也可以获取到
nextTick(() => {
  console.log("在 nextTick 函数中获取到值：", op.value)
})
</script>

<template>
  <div>
    <p ref="op">p标签</p>
  </div>
</template>

<style scoped></style>
