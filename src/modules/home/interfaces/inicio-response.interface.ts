// export interface InicioResponseInterface {
//     info:                InfoInterface[];
//     url:                 string;
//     banner:              BannerInterface[];
//     resumen:             ResumenInterface;
//     proyectos_en_marcha: ProyectosEnMarchaInterface[];
// }

// export interface BannerInterface {
//     PWC_IMAGEN: string;
// }

// export interface InfoInterface {
//     PAG_LOGO:      string;
//     PAG_TEXTO:     string;
//     PAG_LOGO_PUCE: string;
//     PAG_VIDEO:     string;
//     PAG_ICONO_1:   string;
//     PAG_ICONO_2:   string;
//     PAG_NOSOTROS:  string;
// }

// export interface ProyectosEnMarchaInterface {
//     PRO_ID:     string;
//     PRO_NOMBRE: string;
//     PRO_IMAGEN: string;
// }

// export interface ResumenInterface {
//     proyectos:     string;
//     profesores:    string;
//     estudiantes:   string;
//     publicaciones: string;
// }
export interface InicioResponseInterface {
    info:                InfoInterface[];
    url:                 string;
    banner:              BannerInterface[];
    resumen:             ResumenInterface;
    proyectos_en_marcha: ProyectosEnMarchaInterface[];
    formacion:           FormacionInterface;
}

export interface BannerInterface {
    PWC_IMAGEN: string;
}

export interface FormacionInterface {
    contenido: ContenidoInterface[];
    ambitos:   AmbitoInterface[];
}

export interface AmbitoInterface {
    idAmbito: string;
    nombre:   string;
    imagen:   string;
}

export interface ContenidoInterface {
    titulo: string;
    texto:  string;
}

export interface InfoInterface {
    PAG_LOGO:      string;
    PAG_TEXTO:     string;
    PAG_LOGO_PUCE: string;
    PAG_VIDEO:     string;
    PAG_ICONO_1:   string;
    PAG_ICONO_2:   string;
    PAG_NOSOTROS:  string;
}

export interface ProyectosEnMarchaInterface {
    PRO_ID:     string;
    PRO_NOMBRE: string;
    PRO_IMAGEN: string;
}

export interface ResumenInterface {
    proyectos:     string;
    profesores:    string;
    estudiantes:   string;
    publicaciones: string;
}
