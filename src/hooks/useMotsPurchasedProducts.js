import { useQuery } from "@tanstack/react-query";
import { fetchMostPurchasedProducts } from "../services/apiMostPurchased";

export const useMostPurchasedProducts = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["mostPurchased"],
    queryFn: fetchMostPurchasedProducts,
    staleTime: 0,
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, isError, error };
};
