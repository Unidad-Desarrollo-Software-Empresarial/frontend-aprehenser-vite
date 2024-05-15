export interface QueHacemosInterface {
    titulo:   TituloInterface;
    trabajos: TrabajoInterface[];
    url:      string;
}

export interface TituloInterface {
    titulo: string;
    texto:  string;
}

export interface TrabajoInterface {
    titulo: string;
    imagen: string;
    texto:  string;
}
