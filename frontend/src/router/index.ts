import { createRouter, createWebHistory } from "vue-router";
import { Home } from "@/views";

const router = createRouter({
  routes: [
    {
      component: Home,
      path: "/",
    },
    {
      component: () => import("../views/About.vue"),
      path: "/about",
    },
  ],
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
});

export default router;
