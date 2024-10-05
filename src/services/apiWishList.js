import axiosInstance from "./axiosInstance";

export const addToWishList = async (credentials) => {
  const { data } = await axiosInstance.post(`/wishlist-item`, {
    productId: credentials.productId,
    title: credentials.title,
    image: credentials.image,
    price: credentials.price,
    productType: credentials.productType,
  });
  return data;
};

export const getWishListItems = async () => {
  const { data } = await axiosInstance.get(`/wishlist-item`);
  return data;
};
