import { createRouter, createWebHistory } from "vue-router"
import Home from "@/components/home/Home.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/template",
      name: "template",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/components/1_template/Template.vue"),
    },
    {
      path: "/reactivity",
      name: "reactivity",
      component: () => import("@/views/reactivity/index.vue"),
    },
    {
      path: "/directives",
      name: "directives",
      component: () => import("@/components/directives/Directives.vue"),
    },
    {
      path: "/directives/event",
      name: "event",
      component: () => import("@/components/directives/Event.vue"),
    },
    {
      path: "/directives/form",
      name: "form",
      component: () => import("@/components/directives/Form.vue"),
    },
    {
      path: "/components",
      name: "components",
      component: () => import("@/components/components/Components.vue"),
    },
    {
      path: "/third",
      name: "third",
      component: () => import("@/components/import_thirdparty/ThirdParty.vue"),
    },
    {
      path: "/third/table",
      name: "thirdtable",
      component: () => import("@/components/import_thirdparty/Table.vue"),
    },
    {
      path: "/http",
      name: "http",
      component: () => import("@/components/http_client/Http.vue"),
    },
    {
      path: "/lifecycle",
      name: "lifecycle",
      component: () =>
        import("@/components/lifecycle_hooks/LifecycleHooks.vue"),
    },
    {
      path: "/test",
      name: "test",
      component: () => import("@/components/test/Test.vue"),
    },
  ],
})

export default router
