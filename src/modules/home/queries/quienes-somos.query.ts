import { useQuery } from "@tanstack/vue-query"
import { QuienesSomosInterface } from "../interfaces/quienes-somos.interface"
import { api } from "@/api/axios.api"


export const useQuienesSomosQuery = () => {
    const { data, isSuccess, isError, error, isLoading} = useQuery<QuienesSomosInterface>({
        queryKey: ['quienes-somos'],
        queryFn: async () => {
            const response = await api.get('quienes-somos')
            return response.data
        }
    })

    return { data, isSuccess, isError, error, isLoading}
}