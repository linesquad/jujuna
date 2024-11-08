import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToWishList } from "../services/apiWishList";

const useAddToWishList = () => {
  const queryClient = useQueryClient();
  const { mutate, isPending, data } = useMutation({
    mutationFn: addToWishList,
    onSuccess: () => {
      console.log("wish list add to success");
      queryClient.invalidateQueries("wishListItems");
    },
    onError: (err) => {
      console.log(`${err.message} not add success`);
    },
  });

  return { mutate, isPending, data };
};

export default useAddToWishList;
