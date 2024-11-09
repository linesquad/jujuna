import { useQuery } from "@tanstack/react-query";
import { fetchLatestCocktails } from "../services/apiLatest";

export const useLatestCocktails = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["latestCocktails"],
    queryFn: fetchLatestCocktails,
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  return { isLoading, data, isError, error };
};
