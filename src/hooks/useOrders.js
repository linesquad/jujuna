import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../services/apiOrders";

export const useOrders = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
    staleTime: 0,
  });

  return { data, isLoading, isError, error };
};
