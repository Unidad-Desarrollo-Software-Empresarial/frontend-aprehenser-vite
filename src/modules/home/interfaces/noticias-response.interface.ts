export interface NoticiasResponseInterface {
    noticias: NoticiasInterface;
    url:      string;
}

export interface NoticiasInterface {
    texto_logo: string;
    noticias:   NoticiaInterface[];
}

export interface NoticiaInterface {
    PAGN_TITULO: string;
    PAGN_TEXTO:  string;
    IMAGENES:    string[];
}
