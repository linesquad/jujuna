import { useQuery } from "@tanstack/react-query";
import { fetchCocktailsByCategories } from "../services/apiCocktails";

export const useCocktailsByCategories = (id) => {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["cocktailsByCategory", id],
    queryFn: () => fetchCocktailsByCategories(id),
    refetchOnWindowFocus: false,
    staleTime: 60000,
    cacheTime: 300000,
    enabled: id.toLowerCase() !== "allcocktail" && id.length > 0,
  });

  return { data, isLoading, error, isError };
};
