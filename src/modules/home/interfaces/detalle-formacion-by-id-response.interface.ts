export interface DetalleFormacionByIdResponseInterface {
    ambito:  AmbitoInterface;
    cursos:  CursoInterface[];
    estados: EstadoInterface[];
}

export interface AmbitoInterface {
    nombre: string;
    texto:  string;
}

export interface CursoInterface {
    tema:       string;
    duracion:   string;
    itinerario: string;
    inicio:     Date;
    fin:        Date;
    estadoId:   string;
    tipo:       string;
    imagen:     string;
}

export interface EstadoInterface {
    id:     string;
    nombre: string;
}
