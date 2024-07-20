import { useQuery } from "@tanstack/react-query";
import apiOrders from "../services/apiOrders";

const useOrders = (orderId) => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["order"],
    queryFn: () => apiOrders(orderId),
    staleTime: 0,
  });

  return { isLoading, data, isError, error };
};

export default useOrders;
