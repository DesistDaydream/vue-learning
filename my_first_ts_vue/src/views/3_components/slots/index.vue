<script setup lang="ts">
import {} from "vue"
import SlotsChild from "./Slots.vue"
import NamedSlotsChild from "./NamedSlots.vue"
import ScopedSlotsChild from "./ScopedSlots.vue"
</script>

<template>
  <h1>Slots(插槽)</h1>
  参考：
  <li>[官方文档，深入组件-插槽](https://cn.vuejs.org/guide/components/slots.html)</li>

  <p>
    组件可以接收任意类型的 TypeScript 定义的值作为 Props
    并在本组件中使用。但是组件如何接收模板内容呢？在某些场景中，我们可能想要为子组建传递一部分或全部的模板内容，而不是使用 Props。 这时可以使用
    Slots(插槽) 来实现。
  </p>

  <h2>基本示例</h2>
  <p>**Slot Content(插槽内容)** 与 **Slot Outlet(插槽出口)**</p>
  <div>
    <!-- 组件调用元素上有一个默认的 v-slot:default 属性(简写为：#default)。这是一个插槽的默认属性，表示将元素的内容插入到子组件的默认插槽中。 -->
    <!-- 被调用的组件中，所有没有 name 属性的 slot 元素都属于**默认插槽** -->
    <!-- 注意：默认插槽可以省略整个 v-slot 属性 -->
    <SlotsChild>
      组件调用元素的内容称为 **Slot Content(插槽内容)**，这部分内容是在父组件中定义的，在调用组件时，这部分内容会将子组件中的 slot 元素替换掉。
      子组件中的 slot 元素称为**Slot Outlet(插槽出口)**。
    </SlotsChild>
  </div>

  <h2>Named Slots(具名插槽)</h2>
  <!-- 有时候一个组件中有多个插槽，调用组件时，我们如何区分想要将哪些内容插入到哪些插槽中呢？ -->
  <!-- 调用组件时，元素内容中使用一个包含 v-slot 指令的 <template> 元素，即可将 <template> 元素中的内容插入到指定的插槽中。 -->
  <!-- 此时，子组件插槽中，还需要添加 name 元素，以便为插槽指定唯一的 ID -->
  <div>
    <NamedSlotsChild>
      <!-- 注意：<template> 元素必须是顶级的，不可以被包含在其他元素中 -->
      <!-- v-slot 指令指定插槽的 ID，这部分内容将会代替 NamedSlotsChild 子组件中 ID 为 header 的 <slot> 元素 -->
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
  通过 **Scoped Slots(插槽作用域)**，我们可以将子组件插槽中的数据提供给父组件。我们可以像传递 Props 那样，
  <div>
    <h3>默认插槽作用域</h3>
    <!-- 可以通过 v-slot 指令声明一个接收插槽数据的对象。 -->
    <!-- 语法：`v-slot:SlotID="SlotPropName`" -->
    <!-- SlotID 是被调用组件中 <slot> 元素中，name 属性的值。 -->
    <!-- SlotPropName 是声明的对象，这里将对象命名为 slotProps。这个对象专门用来接收插槽数据，即 slot 标签上的标签属性，作为自己的属性 -->
    <ScopedSlotsChild v-slot:default="slotProps">{{ slotProps.text }} {{ slotProps.count }}</ScopedSlotsChild>
    <!-- 简写 -->
    <ScopedSlotsChild v-slot="slotProps">省略 default。{{ slotProps.text }} {{ slotProps.count }}</ScopedSlotsChild>
    <ScopedSlotsChild #default="slotProps">使用 `#default` 简写。{{ slotProps.text }} {{ slotProps.count }}</ScopedSlotsChild>
    <ScopedSlotsChild #="slotProps">使用 `#` 代替 v-slot:default 简写。{{ slotProps.text }} {{ slotProps.count }}</ScopedSlotsChild>

    <h3>具名插槽作用域</h3>
    <ScopedSlotsChild>
      <template v-slot:header="slotProps">
        <p>这是从子组件获取到的数据：{{ slotProps.msg }}</p>
      </template>
      <!-- 简写 -->
      <!-- 注意：在一个组件调用中，不可以使用相同名字的插槽，否则会报错：Duplicate slot names found -->
      <template #footer="slotProps">
        <p>这是从子组件获取到的数据：{{ slotProps.msg }}</p>
      </template>
    </ScopedSlotsChild>

    <h3>解构作用域直接获取子组建的值</h3>
    <p>
      在上面的示例中，我们可以不使用 `#footer="slotProps"` 这种形式获取子组建数据，而是直接解构，就像这样：`#footer="{ msg
      }"`。即可不通过对象调用，从而直接获取到数据
    </p>
    <ScopedSlotsChild>
      <template #footer="{ msg }">
        <p>通过解构从子组件获取到的数据：{{ msg }}</p>
      </template>
    </ScopedSlotsChild>
  </div>
</template>

<style scoped></style>
