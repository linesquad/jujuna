import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToCart } from "../services/apiCart";

export const useAddToCart = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending, data } = useMutation({
    mutationFn: addToCart,
    onMutate: async (variables) => {
      const previousCart = queryClient.getQueryData(["cartItems"]);

      queryClient.setQueryData(["cartItems"], (oldData = []) => {
        return [...oldData, variables];
      });

      return { previousCart };
    },
    onError: (err, variables, context) => {
      queryClient.setQueryData(["cartItems"], context.previousCart);
      console.log("Error adding to cart:", err);
    },
    onSuccess: () => {
      console.log("Item added to cart successfully");
    },
  });

  return { mutate, isPending, data };
};
