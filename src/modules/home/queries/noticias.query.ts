import { api } from "@/api/axios.api";
import { useQuery } from "@tanstack/vue-query";
import { NoticiasResponseInterface } from "../interfaces/noticias-response.interface";

export const useNoticiasQuery = () => {
    const { data, isError, error, isSuccess, isLoading } = useQuery({
        queryKey: ["noticias"],
        queryFn: async () => {
            const response = await api.get<NoticiasResponseInterface>("/noticias");
            return response.data;
        },
    });

    return { data, isError, error, isSuccess, isLoading };
};
