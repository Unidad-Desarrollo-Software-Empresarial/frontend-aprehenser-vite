import { useQuery } from "@tanstack/vue-query";
import { QueHacemosInterface } from "../interfaces/que-hacemos.interface";
import { api } from "@/api/axios.api";

export const useQueHacemosQuery = () => {
    const { data, isError, error, isLoading, isSuccess } = useQuery({
        queryKey: ["que-hacemos"],
        queryFn: async () => {
            const response = await api.get<QueHacemosInterface>("/que-hacemos");
            return response.data;
        },
    });

    return { data, isError, error, isLoading, isSuccess };
};
