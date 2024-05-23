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
                path: "proyectos/:idProyecto",
                name: "proyectos/id",
                component: () => import("../pages/ProyectoDetallePage.vue"),
            },
            {
                path: "noticias",
                name: "noticias",
                component: () => import("../pages/NoticiasPage.vue"),
            },
            {
                path: "publicaciones",
                children: [
                    {
                        path: "",
                        name: "publicaciones",
                        component: () => import("../pages/RevistasPage.vue"),
                    },
                    {
                        path: "divulgaciones",
                        name: "publicaciones/divulgaciones",
                        component: () => import("../pages/DivulgacionesPage.vue"),
                    },
                    {
                        path: "resultados-innovadores",
                        name: "publicaciones/resultados-innovadores",
                        component: () => import("../pages/ResultadosInnovadoresPage.vue"),
                    },
                ],
            },
            {
                path: "desarrollo-formacion",
                children:[
                    {
                        path: "",
                        name: "desarrollo-formacion",
                        component: () => import("../pages/DesarrolloFormacionPage.vue"),
                    },
                    {
                        path: ":idAmbito",
                        name: "desarrollo-formacion/ambito",
                        component: () => import("../pages/DesarrolloFormacionPorAmbitoIdPage.vue"),
                    }
                ]
            }
        ],
    },
];

export default routes;
