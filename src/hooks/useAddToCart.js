import { useMutation } from "@tanstack/react-query";
import { addToCart } from "../services/apiCart";

export const useAddToCart = () => {
  // const queryClient = useQueryClient();
  const { mutate, isPending, data } = useMutation({
    mutationFn: addToCart,
    onSuccess: () => {
      console.log("warmatebit daemata");
      // queryClient.invalidateQueries({
      //   queryKey: ["cartItems"],
      // });
    },
    onError: (err) => {
      console.log("ver daemata", err);
    },
  });
  return { mutate, isPending, data };
};
