// import { HomeRoutes } from "./HomeRoutes";

const routes = [
    {
        path: "",
        children: [
            {
                path: "",
                name: "home",
                component: () => import("../pages/HomePage.vue"),
            },
            {
                path: "quienes-somos",
                children: [
                    {
                        path: "",
                        name: "quienes-somos",
                        component: () => import("../pages/QuienesSomosInformacionPage.vue"),
                    },
                    {
                        path: "equipo",
                        name: "quienes-somos/equipo",
                        component: () => import("../pages/Equipo.vue"),
                    },
                    {
                        path: "opiniones",
                        name: "quienes-somos/opiniones",
                        component: () => import("../pages/OpinionesPage.vue"),
                    },
                    {
                        path: "recursos-graficos",
                        name: "quienes-somos/recursos-graficos",
                        component: () => import("../pages/RecursosGraficosPage.vue"),
                    },
                ],
            },
            {
                path: "que-hacemos",
                name: "que-hacemos",
                component: () => import("../pages/QueHacemosPage.vue"),
            },
            {
                path: "proyectos",
                name: "proyectos",
                component: () => import("../pages/ProyectosPage.vue"),
            },
            {
                path: "noticias",
                name: "noticias",
                component: () => import("../pages/NoticiasPage.vue"),
            },
            {
                path: "publicaciones",
                name: "publicaciones",
                component: () => import("../pages/PublicacionesPage.vue"),
            },
        ],
    },
];

export default routes;
