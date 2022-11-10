import { createRouter, createWebHistory } from "vue-router"
import Home from "@/views/home/Home.vue"

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
      component: () => import("@/views/1_template/index.vue"),
    },
    {
      path: "/directives",
      name: "directives",
      component: () => import("@/views/1_template/directives/Directives.vue"),
    },
    {
      path: "/directives/event",
      name: "event",
      component: () => import("@/views/1_template/directives/Event.vue"),
    },
    {
      path: "/directives/form",
      name: "form",
      component: () => import("@/views/1_template/directives/Form.vue"),
    },
    {
      path: "/directives/v-model",
      name: "v-model",
      component: () =>
        import("@/views/1_template/directives/v-model/PassingProps.vue"),
    },
    {
      path: "/reactivity",
      name: "reactivity",
      component: () => import("@/views/2_reactivity/index.vue"),
    },
    {
      path: "/components",
      name: "components",
      component: () => import("@/views/3_components/index.vue"),
    },
    {
      path: "/components/props",
      name: "props",
      component: () => import("@/views/3_components/props/index.vue"),
    },
    {
      path: "/components/events",
      name: "events",
      component: () => import("@/views/3_components/events/index.vue"),
    },
    {
      path: "/third",
      name: "third",
      component: () => import("@/views/third_party/ThirdParty.vue"),
    },
    {
      path: "/third/table",
      name: "third-table",
      component: () => import("@/views/third_party/table/index.vue"),
    },
    {
      path: "/http",
      name: "http",
      component: () => import("@/views/http_client/Http.vue"),
    },
    {
      path: "/lifecycle",
      name: "lifecycle",
      component: () => import("@/views/lifecycle_hooks/index.vue"),
    },
    {
      path: "/test",
      name: "test",
      component: () => import("@/views/test/Test.vue"),
    },
  ],
})

export default router
