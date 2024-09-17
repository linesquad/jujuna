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
  }
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

    itemInCache(item.productId, item.unit, "minus", queryClient);
  }
};

export const handleIncrease = (item, updateCart, itemInCache, queryClient) => {
  updateCart({
    ...item,
    unit: item.unit + 1,
  });
  itemInCache(item.productId, item.unit, "plus", queryClient);
};

export const handleDelete = (item, updateCart, itemInCache, queryClient) => {
  updateCart({
    ...item,
    unit: 0,
  });
  itemInCache(item.productId, item.unit, "delete", queryClient);
};
