import { useQuery } from "@tanstack/react-query";
import { fetchWinesByCategory } from "../services/apiWines";

export const useWinesByCategory = (id) => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["wine", id],
    queryFn: () => fetchWinesByCategory(id),
    refetchOnWindowFocus: false,
    staleTime: 60000,
    cacheTime: 300000,
  });
  return { isLoading, data, isError, error };
};
