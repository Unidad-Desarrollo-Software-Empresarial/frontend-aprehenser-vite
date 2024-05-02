import { useQuery } from "@tanstack/vue-query";

import { api } from "@/api/axios.api";

import { MenuResponseInterface } from "../interfaces/menu-response.interface";

export const useMenuQuery = () => {
    const { data, isSuccess, isError, error, isLoading } = useQuery<MenuResponseInterface[]>({
        queryKey: ['menu'],
        queryFn: async () => {
            const response = await api.get('menu');
            return response.data;
        }
    })
    return { data, isSuccess, isError, error, isLoading}
}
