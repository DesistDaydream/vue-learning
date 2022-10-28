// 为什么要加这个文件和这些东西，在 vue ts 中才可以在导入 axios 时不报错？
// 不导入则报错：
declare module "*.vue" {
  import Vue from "@/vue"
  export default Vue
}
