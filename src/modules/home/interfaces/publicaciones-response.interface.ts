export interface PublicacionesResponseInterface {
    revistas: RevistaInterface[];
    url:      string;
}

export interface RevistaInterface {
    convocatoria: string;
    imagen:       string;
    revista:      string;
    texto:        string;
}
