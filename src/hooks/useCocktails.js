import { useQuery } from "@tanstack/react-query";
import fetchCocktails from "../services/apiCocktails";

const useCocktails = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["cocktail"],
    queryFn: fetchCocktails,
    staleTime: 0,
  });

  return { isLoading, data, isError, error };
};

export default useCocktails;
