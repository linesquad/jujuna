import { useQuery } from "@tanstack/react-query";
import { fetchTotalAmount } from "../services/apiTotalAmount";

export const useTotalAmount = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["totalAmounts"],
    queryFn: fetchTotalAmount,
    staleTime: 0,
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, isError, error };
};
