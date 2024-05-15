import { useQuery } from "@tanstack/vue-query";
import { ProyectosResponseInterface } from "../interfaces/proyectos-response.interface";
import { api } from "@/api/axios.api";

export const useProyectosQuery = () => {
    const { data, isSuccess, isError, error, isLoading } = useQuery({
        queryKey: ["proyectos"],
        queryFn: async () => {
            const response = await api.get<ProyectosResponseInterface>("/proyectos");
            return response.data;
        },
    });
    return { data, isSuccess, isError, error, isLoading };
};
