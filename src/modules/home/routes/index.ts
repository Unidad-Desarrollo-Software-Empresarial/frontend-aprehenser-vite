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
                // children: [
                //     {
                //         path: "",
                //         name: "que-hacemos",
                //         component: () => import("../pages/InnovacionEducativaPage.vue"),
                //     },
                //     {
                //         path: "formacion-docente",
                //         name: "que-hacemos/formacion-docente",
                //         component: () => import("../pages/FormacionDocentePage.vue"),
                //     },
                //     {
                //         path: "investigacion-educativa",
                //         name: "que-hacemos/investigacion-educativa",
                //         component: () => import("../pages/InvestigacionEducativaPage.vue"),
                //     },
                //     {
                //         path: "laboratorio-pucesi-lab",
                //         name: "que-hacemos/laboratorio-pucesi-lab",
                //         component: () => import("../pages/LaboratorioPucesiPage.vue"),
                //     },
                //     {
                //         path: "impactos",
                //         name: "que-hacemos/impactos",
                //         component: () => import("../pages/ImpactosPage.vue"),
                //     },
                //     {
                //         path: "mejora-continua",
                //         name: "que-hacemos/mejora-continua",
                //         component: () => import("../pages/MejoraContinuaPage.vue"),
                //     },
                // ],
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
                // name: "publicaciones",
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
        ],
    },
];

export default routes;
