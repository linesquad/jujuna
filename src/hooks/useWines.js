import { useQuery } from "@tanstack/react-query";
import { fetchWines } from "../services/apiWines";

export const useWines = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["wine"],
    queryFn: fetchWines,

    refetchOnWindowFocus: false,
    staleTime: 60000,
    cacheTime: 300000,
  });
  return { isLoading, data, isError, error };
};
