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

// export const useGetCartItems = () => {
//   const { data, isLoading, error, isError } = useQuery({
//     queryKey: ["cartItems"],
//     queryFn: getCartItems,
//     onSuccess: () => {
//       console.log("warmatebit wamoigho");
//     },
//     onError: (err) => {
//       console.log("ver wamoigho", err);
//     },
//   });

//   return { data, isLoading, error, isError };
// };
