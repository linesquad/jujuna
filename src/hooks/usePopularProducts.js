import { useQuery } from "@tanstack/react-query";
import { fetchPopularProducts } from "../services/apiPopularProducts";

const usePopularProducts = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["popular"],
    queryFn: fetchPopularProducts,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
  });

  return { isLoading, data, isError, error };
};

export default usePopularProducts;
