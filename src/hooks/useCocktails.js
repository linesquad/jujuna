import { useQuery } from "@tanstack/react-query";
import fetchCocktails, { fetchCocktailsId } from "../services/apiCocktails";

const useCocktails = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["cocktail"],
    queryFn: fetchCocktails,
    staleTime: 0,
  });

  return { isLoading, data, isError, error };
};

export default useCocktails;

export const useCocktailId = (id) => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["cocktailId", id],
    queryFn: () => fetchCocktailsId(id),
    staleTime: 0,
  });

  return { isLoading, data, isError, error };
};
