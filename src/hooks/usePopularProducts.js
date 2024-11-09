import { useQuery } from "@tanstack/react-query";
import { fetchPopularProducts } from "../services/apiPopularProducts";

const usePopularProducts = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["popular"],
    queryFn: fetchPopularProducts,
    staleTime: 60000 * 10,
  });

  return { isLoading, data, isError, error };
};

export default usePopularProducts;
