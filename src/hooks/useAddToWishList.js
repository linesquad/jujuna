import { useMutation } from "@tanstack/react-query";
import { addToWishList } from "../services/apiWishList";

export const useAddToWishList = () => {
  const { mutate, isPending, data } = useMutation({
    mutationFn: addToWishList,
    onSuccess: () => {
      console.log("wish list add to success");
    },
    onError: (err) => {
      console.log(`${err.message} not add success`);
    },
  });

  return { mutate, isPending, data };
};
