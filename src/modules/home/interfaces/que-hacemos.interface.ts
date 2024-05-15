export interface QueHacemosInterface {
    titulo:   Titulo;
    trabajos: Trabajo[];
    url:      string;
}

export interface Titulo {
    titulo: string;
    texto:  string;
}

export interface Trabajo {
    titulo: string;
    imagen: string;
    texto:  string;
}
