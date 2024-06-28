export interface InscripcionPostInterface {
    message?: string
    status?: number
    error?: number
    messages?: object
}


export interface InscripcionPostRequest {
    REC_NOMBRES:  string;
    REC_CORREO:   string;
    REC_CEDULA:   string;
    REC_TELEFONO: string;
    DESC_ID:      number;
}
