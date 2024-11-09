import { useQuery } from "@tanstack/react-query";
import { fetchDiscountProducts } from "../services/apiDiscountProducts";

export const useDiscountProducts = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["discount"],
    queryFn: fetchDiscountProducts,
    staleTime: 60000 * 10,
  });

  return { isLoading, data, isError, error };
};
