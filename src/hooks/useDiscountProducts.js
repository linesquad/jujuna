import { useQuery } from "@tanstack/react-query";
import { fetchDiscountProducts } from "../services/apiDiscountProducts";

export const useDiscountProducts = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["discount"],
    queryFn: fetchDiscountProducts,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
  });

  return { isLoading, data, isError, error };
};
