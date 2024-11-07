import { useQuery } from "@tanstack/react-query";
import { searchProducts } from "../services/apiSearchProduct";

export const useSearchProducts = (title, flag) => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["searchProducts", title, flag],
    queryFn: () => searchProducts(title, flag),

    refetchOnWindowFocus: false,
    staleTime: 60000,
    cacheTime: 300000,
  });
  return { isLoading, data, isError, error };
};
