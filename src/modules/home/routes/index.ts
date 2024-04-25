import { HomeRoutes } from "./HomeRoutes";

const routes = [
    {
        path: "",
        children: [
            {
                path: HomeRoutes.home,
                name: "home",
                component: () => import("../pages/HomePage.vue"),
            },
            {
                path: HomeRoutes.quienesSomos,
                children: [
                    {
                        path: "",
                        name: "quienes-somos",
                        component: () => import("../pages/QuienesSomosInformacionPage.vue"),
                    },
                    {
                        path: HomeRoutes.equipo,
                        name: "quienes-somos/equipo",
                        component: () => import("../pages/Equipo.vue"),
                    },
                ],
            },
            {
                path: HomeRoutes.queHacemos,
                name: "que-hacemos",
                component: () => import("../pages/QueHacemosPage.vue"),
            },
            {
                path: HomeRoutes.proyectos,
                name: "proyectos",
                component: () => import("../pages/ProyectosPage.vue"),
            },
            {
                path: HomeRoutes.noticias,
                name: "noticias",
                component: () => import("../pages/NoticiasPage.vue"),
            },
            {
                path: HomeRoutes.publicaciones,
                name: "publicaciones",
                component: () => import("../pages/PublicacionesPage.vue"),
            },
        ],
    },
];

export default routes;
