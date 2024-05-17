export interface ProyectosResponseInterface {
    convocatorias: ConvocatoriaInterface[];
    url:           string;
}

export interface ConvocatoriaInterface {
    CONV_NOMBRE: string;
    PROYECTOS:   ProyectoInterface[];
}

export interface ProyectoInterface {
    PRO_ID:             string;
    PRO_NOMBRE:         string;
    DETP_LINEACIONES: string[];
    IMAGENES:           string[];
}
