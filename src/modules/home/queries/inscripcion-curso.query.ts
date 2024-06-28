import { api } from "@/api/axios.api";
import { useMutation } from "@tanstack/vue-query";
import {
    InscripcionPostInterface,
    InscripcionPostRequest,
} from "../interfaces/inscripcion";

export const useInscripcionCursoQuery = () => {
    const mutation = useMutation({
        mutationFn: async (data: InscripcionPostRequest) => {
            const response = await api.post<InscripcionPostInterface>(
                "/registro-participante",
                data,
                {
                    validateStatus: (status) => status <= 500,
                },
            );
            if (response.status !== 201) {
                throw new Error(`${response.data.messages}`);
            }
            return response.data;
        },
        onSuccess(data) {
            alert(data.message);
        },
        onError() {
            alert(`Error al inscribirse en el curso. Intente nuevamente.`);
        },
    });

    return mutation;
};
