import { HomeRoutes } from "./HomeRoutes";


const routes = [
  {
    path: "/",
    children: [
        {
            path: HomeRoutes.home,
            component: () => import("../pages/HomePage.vue"),
        },
        {
            path: HomeRoutes.quienesSomos,
            component: () => import("../pages/QuienesSomosPage.vue"),
        },
        {
            path: HomeRoutes.queHacemos,
            component: () => import("../pages/QueHacemosPage.vue"),
        },
        {
            path: HomeRoutes.proyectos,
            component: () => import("../pages/ProyectosPage.vue"),
        },
        {
            path: HomeRoutes.noticias,
            component: () => import("../pages/NoticiasPage.vue"),
        },
        {
            path: HomeRoutes.publicaciones,
            component: () => import("../pages/PublicacionesPage.vue"),
        }
    ]
  },
];

export default routes;
