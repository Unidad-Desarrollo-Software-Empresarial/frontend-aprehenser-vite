import { createRouter, createWebHistory } from "vue-router";
import homeRoutes from "../modules/home/routes/index";

const routes = [
  ...homeRoutes,
  {
    path: '/:catchAll(.*)*',
    component: () => import('../modules/404/pages/NotFoundPage.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  strict: true,
  routes,
});

export default router;