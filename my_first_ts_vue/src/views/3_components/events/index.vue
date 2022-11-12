<script setup lang="ts">
import { ref } from "vue"
import PassingPropsWithCustomEvent from "./Event.vue"
import EventWithVModel from "./EventWithVModel.vue"

// 子组件使用 emit 触发事件通知父组件
const titlesFontSize = ref(1)
const enlargeText = () => {
  titlesFontSize.value += 0.2
}
// 子组件中声明的事件带有参数，那么父组件中监听该事件时，可以获取到子组件传递的参数
const reduceText = (valFromSub: number) => {
  titlesFontSize.value -= valFromSub
}

// 通过 v-model 传递 props
let num = ref(20)
</script>

<template>
  <h1>事件</h1>

  <h2>通过自定义事件在子组件中主动与父组件交互</h2>
  我们可以通过 defineEmits() 函数创建自定义事件，然后在子组件中通过 emit()
  函数触发这些事件，从而在父组件中监听这些事件并执行相应的逻辑。
  <!-- 监听事件 -->
  <div :style="{ fontSize: titlesFontSize + 'em' }">
    <!-- 调用组件时，可以监听子组件中声明的自定义事件
        子组件可以使用 emit() 函数触发事件，从而通知父组件
        这里监听了名为 enlarge-text 和 reduce-text 的自定义事件 -->
    <PassingPropsWithCustomEvent
      msg="这次字体将会随着按钮点击而变化"
      @enlarge-text="enlargeText"
      @reduce-text="reduceText"
    />
  </div>

  <h2>使用 v-model 指令让子组件中主动与父组件交互</h2>
  由于父组件使用了 v-model 指令，所以子组件中的 props
  会自动变成双向绑定的。此时，子组件中的 props
  变化会自动同步到父组件中，而父组件中的 props 变化也会自动同步到子组件中。
  <div>
    <EventWithVModel v-model:num="num" />
  </div>
</template>

<style scoped></style>
