<script setup lang="ts">
import { ref } from "vue"
import PassingPropsDemo from "@/components/3_components/passing_props/PassingPropsDemo.vue"
import PassingPropsDemoWithVfor from "@/components/3_components/passing_props/PassingPropsDemoWithVfor.vue"
import PassingPropsListeningEvents from "@/components/3_components/passing_props/PassingPropsListeningEvents.vue"

const Titles = ref([
  { id: 1, title: "我的 Vue 之旅" },
  { id: 2, title: "使用 Vue 写博客" },
  { id: 3, title: "为什么 Vue 如此有趣" },
])

const titlesFontSize = ref(1)
</script>

<template>
  <h2>Props 传递</h2>
  <PassingPropsDemo
    title="组件之间的交互传递的数据"
    msg="组件之间的交互传递的数据"
  />

  <h2>通过 v-for 传递 Props</h2>
  <!-- 通过 v-for 指令多次调用组件，且多次传递 props -->
  <PassingPropsDemoWithVfor
    v-for="t in Titles"
    :key="t.id"
    :title="t.title"
  ></PassingPropsDemoWithVfor>

  <h2>子组件到父组件传递 Props</h2>
  <div>
    <p>
      我们可以通过 defineEmits() 函数创建监听事件以便让 props
      从子组件传递到父组件
    </p>
    <!-- 监听事件 -->
    <div :style="{ fontSize: titlesFontSize + 'em' }">
      <PassingPropsListeningEvents
        msg="这次字体将会随着按钮点击而变化"
        @enlarge-text="titlesFontSize += 0.1"
        @reduce-text="titlesFontSize -= 0.1"
      />
    </div>
  </div>
</template>

<style scoped></style>
