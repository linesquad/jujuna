import { useQuery } from "@tanstack/react-query";
import { fetchCocktails } from "../services/apiCocktails";

const useCocktails = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["cocktail"],
    queryFn: fetchCocktails,

    refetchOnWindowFocus: false,
    staleTime: 60000,
    cacheTime: 300000,
  });
  console.log("cocktails hook");
  return { isLoading, data, isError, error };
};

export default useCocktails;
