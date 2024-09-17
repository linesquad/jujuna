import { useQuery } from "@tanstack/react-query";
import { fetchWines, fetchWinesByCategory } from "../services/apiWines";

export const useWines = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["wine"],
    queryFn: () => fetchWines(),

    refetchOnWindowFocus: false,
    staleTime: 60000,
    cacheTime: 300000,
  });
  return { isLoading, data, isError, error };
};

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
