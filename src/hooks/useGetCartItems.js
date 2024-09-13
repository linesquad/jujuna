import { useQuery } from "@tanstack/react-query";
import { getCartItems } from "../services/apiCart";

export const useGetCartItems = () => {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["cartItems"],
    queryFn: getCartItems,
    onSuccess: () => {
      console.log("warmatebit wamoigho");
    },
    staleTime: 3000 * 60,
  });

  return { data, isLoading, error, isError };
};
