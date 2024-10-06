import { useQuery } from "@tanstack/react-query";
import { fetchCocktailsId } from "../services/apiCocktails";

export const useCocktailId = (id) => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["cocktailId", id],
    queryFn: () => fetchCocktailsId(id),

    refetchOnWindowFocus: false,
    staleTime: 60000,
    cacheTime: 300000,
  });
  console.log("cocktails");
  return { isLoading, data, isError, error };
};
