import { useQuery } from "@tanstack/react-query";
import { fetchWines, fetchWineById } from "../services/apiWines";

export const useWines = (type) => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["wine"],
    queryFn: () => fetchWines(type),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    // refetchOnMount: false,
    staleTime: 0,
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
