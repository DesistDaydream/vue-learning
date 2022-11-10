<script setup lang="ts">
import { reactive, computed, ref } from "vue"

// 模板中的表达式虽然方便，但也只能用来做简单的操作。如果在模板中写太多逻辑，会让模板变得臃肿，难以维护。
let data = ref({
  persons: [
    { id: 1, name: "Jack", age: 18 },
    { id: 2, name: "Rose", age: 20 },
    { id: 3, name: "Tom", age: 22 },
    { id: 4, name: "Jerry", age: 24 },
  ],
  checkList: [false, false, false, false],
})

// 一个计算属性 ref
const greater20Person = computed(() => {
  return data.value.persons
    .filter((item) => item.age > 20)
    .map((item) => item.name)
    .join(", ")
})

// Vue 提供了一种更通用的方式来观察和响应 Vue 实例上的数据变动：侦听属性。
// 当你有一些数据需要随着其它数据变动而变动时，你很容易滥用 watch()。
// 然而，通常更好的做法是使用计算属性而不是命令式的 watch() 回调。
// 比如复选框的全选和全不选，就可以使用 computed() 来实现。

// computed() 最佳的用法是使用其中的 get() 和 set() 方法，常用于监听某个值的变化，然后做一些操作。
let allChecked = computed({
  // get() 方法监听函数内调用的数据的变化。get() 方法与 watchEffect() 函数类似
  get() {
    // 函数中调用了 data.checkList，所以监听的是 data.checkList 对象的变化
    // 每次 checkList 发生变化，将会执行这里面的逻辑
    console.log(data.value.checkList)
    // 只要 checkList 中有一项为 false, 则返回 false，否则为 true
    // 返回值就是 allChecked 的值
    return !data.value.checkList.includes(false)
  },
  // set() 方法监听 allChecked 的变化。set() 中的参数的值是通过模板中的 v-model="allChecked" 传递过来的
  set(newValue) {
    console.log(
      "allChecked在页面被点击时，由于 v-model 导致数据变化，此时执行 set() 中的代码；此时 allChecked 的值为：",
      newValue
    )
    // 这里的逻辑是将 data.checkList 中的每个元素都改为 allChecked 的值。如果 allChecked 为 true，那么每个元素都为 true，否则都为 false
    data.value.checkList = data.value.checkList.map(() => newValue)
  },
})
</script>

<template>
  <div>
    <p>大于20岁的人: {{ greater20Person }}</p>
  </div>

  <h3>可写的 computed()</h3>
  <div>
    <input type="checkbox" v-model="allChecked" />
    全选/全不选
    <ul>
      <li v-for="(item, index) in data.persons" :key="index">
        <input type="checkbox" v-model="data.checkList[index]" />
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
