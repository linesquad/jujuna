import { useQuery } from "@tanstack/react-query";
import { fetchWines, fetchWineById } from "../services/apiWines";

export const useWines = (type) => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["wine"],
    queryFn: () => fetchWines(type),
    staleTime: 1000 * 60 * 5, // Data will be considered fresh for 5 minutes
    cacheTime: 1000 * 60 * 10, // Cache data for 10 minutes
    refetchOnWindowFocus: false,
  });

  return { isLoading, data, isError, error };
};

export const useWineById = (id) => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["wineById", id],
    queryFn: () => fetchWineById(id),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    staleTime: 0,
  });
  return { isLoading, data, isError, error };
};
