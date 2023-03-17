import { createRouter, createWebHistory } from "vue-router";
import { Home } from "@/views";

import useProfileRoutes from "./profile.routes"

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
    { ... useProfileRoutes }
  ],
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
});

export default router;
