import { useMutation } from "@tanstack/react-query";
import { addToCart } from "../services/apiCart";

export const useAddToCart = () => {
  const { mutate, isPending, data } = useMutation({
    mutationFn: addToCart,
    onSuccess: () => {
      console.log("warmatebit daemata");
    },
  });

  return { mutate, isPending, data };
};
