import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addToCart, getCartItems } from "../services/apiCart";

export const useAddToCart = () => {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: addToCart,
    onSuccess: () => {
      console.log("warmatebit daemata");
      queryClient.invalidateQueries("cartItems");
    },
    onError: (err) => {
      console.log("ver daemata", err);
    },
  });

  return mutate;
};

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
