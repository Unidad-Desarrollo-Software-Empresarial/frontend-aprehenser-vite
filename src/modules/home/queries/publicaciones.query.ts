import { api } from "@/api/axios.api";
import { useQuery } from "@tanstack/vue-query";
import { PublicacionesResponseInterface } from "../interfaces/publicaciones-response.interface";

export const usePublicacionesQuery = () => {
    const { data, isError, error, isLoading, isSuccess } = useQuery({
        queryKey: ["publicaciones"],
        queryFn: async () => {
            const response = await api.get<PublicacionesResponseInterface>("/publicaciones");
            return response.data;
        },
    });

    return { data, isError, error, isLoading, isSuccess };
};
