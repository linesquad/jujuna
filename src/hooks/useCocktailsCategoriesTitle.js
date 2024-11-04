import { useQuery } from "@tanstack/react-query";
import { fetchCocktailsCategoriesTitle } from "../services/apiCocktails";

export const useCocktailsCategoriesTitle = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["cocktailCategories"],
    queryFn: fetchCocktailsCategoriesTitle,
    refetchOnWindowFocus: false,
    staleTime: 60000,
    cacheTime: 300000,
  });

  return { data, isLoading, isError, error };
};
