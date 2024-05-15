export interface QuienesSomosInterface {
    informacion_general: InformacionGeneralInterface;
    equipo:              EquipoInterface;
    opiniones:           OpinionesInterface;
    recursos_graficos:   RecursosGraficos;
    url:                 string;
}

export interface EquipoInterface {
    nombre:        string;
    Equipo:        OpinionInterface[];
    Colaboradores: OpinionInterface[];
    imagen:        ImagenInterface[];
}

export interface OpinionInterface {
    imagen:  string;
    nombre:  string;
    cargo:   string;
    correo?: string;
    texto:   string;
}

export interface ImagenInterface {
    imagen: string;
}

export interface InformacionGeneralInterface {
    nombre?:   string;
    titulo:    string;
    texto:     string;
    imagen:    string;
    comboBox?: string;
}

export interface OpinionesInterface {
    nombre:  string;
    titulo:  string;
    opinion: OpinionInterface;
}

export interface RecursosGraficos {
    nombre:   string;
    detalles: InformacionGeneralInterface[];
}
