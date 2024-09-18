import { useQuery } from "@tanstack/react-query";
import { getWishListItems } from "../services/apiWishList";

const useGetWishListItems = () => {
  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["wishListItems"],
    queryFn: getWishListItems,
    onSuccess: () => {
      console.log("warmatebit daemata wishlistshi");
    },
  });

  return { data, isError, error, isLoading };
};

export default useGetWishListItems;
