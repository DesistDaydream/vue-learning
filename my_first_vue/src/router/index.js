import { createRouter, createWebHistory } from "vue-router"
import Home from "../components/home/Home.vue"

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
      component: () => import("../components/template/Template.vue"),
    },
    {
      path: "/directives",
      name: "directives",
      component: () => import("../components/directives/Directives.vue"),
    },
    {
      path: "/directives/event",
      name: "event",
      component: () => import("../components/directives/Event.vue"),
    },
    {
      path: "/directives/form",
      name: "form",
      component: () => import("../components/directives/Form.vue"),
    },
  ],
})

export default router
