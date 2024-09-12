import { useMutation } from "@tanstack/react-query";
import { addToCart } from "../services/apiCart";

export const useAddToCart = () => {
  const mutate = useMutation({
    mutationFn: addToCart,
    onSuccess: () => {
      console.log("warmatebit daemata");
    },
    onError: (err) => {
      console.log("ver daemata", err);
    },
  });

  return mutate;
};
