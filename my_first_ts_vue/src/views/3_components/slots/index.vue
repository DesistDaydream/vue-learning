<script setup lang="ts">
import {} from "vue"
import SlotsChild from "./Slots.vue"
import NamedSlotsChild from "./NamedSlots.vue"
import ScopedSlotsChild from "./ScopedSlots.vue"
</script>

<template>
  <h1>Slots(插槽)</h1>
  <p>
    组件可以接收任意类型的 TypeScript 定义的值作为 Props
    并在本组件中使用，但是组件如何接收模板内容呢？在某些场景中，我们可能想要为子组建传递一部分或全部的模板内容，而不是使用
    Props。 这时可以使用 Slots 来实现。
  </p>

  <div>
    <SlotsChild>
      这一部分称为
      **插槽内容**，这部分内容是在父组件中定义的，在调用子组件时，子组件元素中的内容会将子组件中的
      slot 元素替换掉。 子组件中的 slot 元素称为**插槽出口**。
    </SlotsChild>
  </div>

  <h2>Named Slots(具名插槽)</h2>
  <div>
    <NamedSlotsChild>
      <!-- v-slot 指令指定插槽的 ID，这部分内容将会代替 NamedSlotsChild 这个子组建中 ID 为 header 的 <slot> 元素 -->
      <template v-slot:header>
        <h3>头</h3>
      </template>

      <!-- 当一个组件同时接收默认插槽和具名插槽时，所有位于顶级的非 <template> 元素都被隐式地视为默认插槽的内容。 -->
      内容

      <!-- v-slot: 指令可以简写为 # -->
      <!-- 这部分的意思是：将这部分模板片段传入子组件中的 footer 插槽中 -->
      <template #footer>
        <h4>尾</h4>
      </template>
    </NamedSlotsChild>
  </div>

  <h2>Scoped Slots(插槽作用域)</h2>
  <div>
    <h3>匿名插槽作用域</h3>
    <p>
      对于匿名插槽，可以通过 v-slot 指令声明一个接收插槽数据的对象，名为
      slotProps。这里面的 v-slot="slotProps" 其实相当于
      v-slot:default="slotProps"。这个对象专门用来接收插槽数据，即 slot
      标签上的标签属性，作为自己的属性
    </p>
    <ScopedSlotsChild v-slot="slotProps">
      {{ slotProps.text }} {{ slotProps.count }}
    </ScopedSlotsChild>

    <h3>具名插槽作用域</h3>
    <ScopedSlotsChild>
      <template #footer="slotProps">
        <p>这是子组件传递过来的数据：{{ slotProps.msg }}</p>
      </template>
    </ScopedSlotsChild>
  </div>
</template>

<style scoped></style>
