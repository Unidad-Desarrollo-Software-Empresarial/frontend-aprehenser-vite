import { api } from "@/api/axios.api";
import { useQuery } from "@tanstack/vue-query";
import { DetalleProyectosResponseInterface } from "../interfaces/detalle-proyectos-response";

export const useDetalleProyectoQuery = (idProyecto: string) => {
    const { data, isError, error, isLoading } = useQuery({
        queryKey: ["detalle-proyecto", idProyecto],
        queryFn: async () => {
            const response = await api.get<DetalleProyectosResponseInterface>(
                `detalle-proyectos/${idProyecto}`,
            );
            return response.data;
        },
    });
    return { data, isError, error, isLoading };
};
