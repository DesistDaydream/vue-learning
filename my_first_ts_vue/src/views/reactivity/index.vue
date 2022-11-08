<script setup lang="ts">
import { ref } from "vue"
import Reactivity from "@/components/2_reactivity/Reactivity.vue"
import RefGetElement from "@/components/2_reactivity/RefGetElement.vue"
import RefAndReactiveVue from "@/components/2_reactivity/RefAndReactive.vue"
import Watch from "@/components/2_reactivity/Watch.vue"
</script>

<template>
  <h1>响应式</h1>
  <div>
    <Reactivity />
  </div>

  <div>
    <RefGetElement />
  </div>

  <div>
    <RefAndReactiveVue />
  </div>

  <div>
    <Watch />
  </div>
</template>

<style scoped></style>
