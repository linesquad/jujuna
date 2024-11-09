import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToWishList } from "../services/apiWishList";

const useAddToWishList = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending, data } = useMutation({
    mutationFn: addToWishList,
    onMutate: async (variables) => {
      const previousWishList = queryClient.getQueryData(["wishListItems"]);

      queryClient.setQueryData(["wishListItems"], (oldData) => {
        return [...oldData, variables];
      });

      return { previousWishList };
    },
    onError: (err, variables, context) => {
      queryClient.setQueryData(["wishListItems"], context.previousWishList);
    },
    onSuccess: () => {
      console.log("Wish list item added successfully");
    },
  });

  return { mutate, isPending, data };
};

export default useAddToWishList;
