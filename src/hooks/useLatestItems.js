import { useQuery } from "@tanstack/react-query";
import { fetchLatestCocktails } from "../services/apiLatest";

export const useLatestCocktails = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["latestCocktails"],
    queryFn: fetchLatestCocktails,
    staleTime: 60000 * 10,
  });

  return { isLoading, data, isError, error };
};
