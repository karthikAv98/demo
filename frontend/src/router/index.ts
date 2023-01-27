import { createRouter, createWebHistory } from "vue-router";
import { Home } from "@/views"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      component: Home,
      path: "/"
    }
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
});

export default router;
