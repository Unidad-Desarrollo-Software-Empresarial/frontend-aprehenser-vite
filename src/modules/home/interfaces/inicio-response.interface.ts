export interface InicioResponseInterface {
    info:                Info[];
    url:                 string;
    banner:              Banner[];
    resumen:             Resumen;
    proyectos_en_marcha: ProyectosEnMarcha[];
}

export interface Banner {
    PWC_IMAGEN: string;
}

export interface Info {
    PAG_LOGO:      string;
    PAG_TEXTO:     string;
    PAG_LOGO_PUCE: string;
    PAG_VIDEO:     string;
    PAG_ICONO_1:   string;
    PAG_ICONO_2:   string;
    PAG_NOSOTROS:  string;
}

export interface ProyectosEnMarcha {
    PRO_ID:     string;
    PRO_NOMBRE: string;
    PRO_IMAGEN: string;
}

export interface Resumen {
    proyectos:     string;
    profesores:    string;
    estudiantes:   string;
    publicaciones: string;
}
