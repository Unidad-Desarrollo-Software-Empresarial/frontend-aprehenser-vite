export interface DetalleProyectosResponseInterface {
    contenido: ContenidoProyectosInterface;
    url:       string;
}

export interface ContenidoProyectosInterface {
    titulo:        string;
    coordinador:   string;
    escuela:       string;
    lineacion:     string;
    descripcion:   string;
    video:         string;
    participantes: string[];
    imagenes:      any[];
}
