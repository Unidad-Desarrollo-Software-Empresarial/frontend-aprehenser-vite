import { useQuery } from "@tanstack/vue-query";

import { api } from "@/api/axios.api";

import { InicioResponseInterface } from "../interfaces/inicio-response.interface";

export const useInicioQuery = () => {
    const { data, isSuccess, isError, error, isLoading } = useQuery<InicioResponseInterface>({
        queryKey: ['inicio'],
        queryFn: async () => {
            const response = await api.get('inicio');
            return response.data;
        }
    })
    return { data, isSuccess, isError, error, isLoading}
}
