import { useQuery } from "@tanstack/react-query";
import { fetchWineCategories } from "../services/apiWines";

export const useWinesCategory = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["winesCategory"],
    queryFn: () => fetchWineCategories(),
    refetchOnWindowFocus: false,
    staleTime: 60000,
    cacheTime: 300000,
  });

  return { isLoading, data, isError, error };
};
