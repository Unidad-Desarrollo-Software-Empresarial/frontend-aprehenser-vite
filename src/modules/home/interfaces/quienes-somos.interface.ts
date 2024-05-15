export interface QuienesSomosInterface {
    informacion_general: InformacionGeneral;
    equipo:              Equipo;
    opiniones:           Opiniones;
    recursos_graficos:   RecursosGraficos;
    url:                 string;
}

export interface Equipo {
    nombre:        string;
    Equipo:        Opinion[];
    Colaboradores: Opinion[];
    imagen:        Imagen[];
}

export interface Opinion {
    imagen:  string;
    nombre:  string;
    cargo:   string;
    correo?: string;
    texto:   string;
}

export interface Imagen {
    imagen: string;
}

export interface InformacionGeneral {
    nombre?:   string;
    titulo:    string;
    texto:     string;
    imagen:    string;
    comboBox?: string;
}

export interface Opiniones {
    nombre:  string;
    titulo:  string;
    opinion: Opinion;
}

export interface RecursosGraficos {
    nombre:   string;
    detalles: InformacionGeneral[];
}
