import { useQuery } from '@tanstack/vue-query';
import { DetalleFormacionByIDResponseInterface } from '../interfaces/detalle-formacion-by-id-response.interface';
import { api } from '@/api/axios.api';



export const useDetalleFormacionQuery = (idFormacion: string) => {
    const { data, isError, error, isLoading } = useQuery({
        queryKey: ["detalle-formacion", idFormacion],
        queryFn: async () => {
            const response = await api.get<DetalleFormacionByIDResponseInterface>(
                `detalle-formacion/${idFormacion}`,
            );
            return response.data;
        },
    });
    return { data, isError, error, isLoading };
}