export const updateWishListCache = (itemId, queryClient) => {
  const data = queryClient.getQueryData(["wishListItems"]);

  if (data) {
    const updatedData = data.filter(
      (item) => item.productId.toString() !== itemId.toString()
    );

    queryClient.setQueryData(["wishListItems"], updatedData);
  }
};
