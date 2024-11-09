export const itemInCache = (itemId, unit, method, queryClient) => {
  const data = queryClient.getQueryData(["cartItems"]);

  if (data) {
    const updatedData = data
      .map((item) => {
        return item.productId.toString() === itemId.toString()
          ? {
              ...item,
              unit:
                method === "plus"
                  ? unit + 1
                  : method === "minus"
                  ? unit - 1
                  : 0,
            }
          : item;
      })
      .filter((item) => item.unit > 0);

    queryClient.setQueryData(["cartItems"], updatedData);

    // Return the updated cart length
    return updatedData.length;
  }

  // If data is not available, return 0 or undefined
  return 0;
};

export const handleDecrease = (
  item,
  updateCart,
  itemInCache,
  queryClient,
  isError
) => {
  const newUnit = item.unit - 1;

  if (newUnit === 0) {
    handleDelete(item, updateCart, itemInCache, queryClient);
  } else {
    updateCart({
      ...item,
      unit: newUnit,
    });
    if (isError) return;

    const cartLength = itemInCache(
      item.productId,
      item.unit,
      "minus",
      queryClient
    );
    console.log("Cart Length after decrease:", cartLength);
  }
};

export const handleIncrease = (item, updateCart, itemInCache, queryClient) => {
  updateCart({
    ...item,
    unit: item.unit + 1,
  });

  const cartLength = itemInCache(
    item.productId,
    item.unit,
    "plus",
    queryClient
  );
  console.log("Cart Length after increase:", cartLength);
};

export const handleDelete = (item, updateCart, itemInCache, queryClient) => {
  updateCart({
    ...item,
    unit: 0,
  });

  const cartLength = itemInCache(
    item.productId,
    item.unit,
    "delete",
    queryClient
  );
  console.log("Cart Length after delete:", cartLength);
};
