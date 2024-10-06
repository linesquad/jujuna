import { useQuery } from "@tanstack/react-query";
import { getOrderById } from "../services/apiOrders";

const useGetOrderById = (orderId) => {
  const { data, isError, error, isLoading } = useQuery({
    queryFn: () => getOrderById(orderId),
    queryKey: ["order", orderId],
    refetchOnWindowFocus: false,
  });

  return { data, isError, error, isLoading };
};

export default useGetOrderById;
