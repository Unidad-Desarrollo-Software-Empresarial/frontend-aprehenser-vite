// export interface PublicacionesResponseInterface {
//     revistas: RevistaInterface[];
//     url:      string;
// }

// export interface RevistaInterface {
//     convocatoria: string;
//     imagen:       string;
//     revista:      string;
//     texto:        string;
// }
export interface PublicacionesResponseInterface {
    contenido: ContenidoInterface[];
    url:       string;
}

export interface ContenidoInterface {
    nombre:         string;
    titulo:         string;
    MEN_ID:         string;
    publicaciones?: PublicacionesInterface[];
    divulgaciones?: DivulgacionesInterface[];
    resultados?:    DivulgacionesInterface[];
}

export interface DivulgacionesInterface {
    imagen: string;
    texto:  string;
    link:   string;
}

export interface PublicacionesInterface {
    convocatoria: string;
    imagen:       string;
    revista:      string;
    texto:        string;
}
