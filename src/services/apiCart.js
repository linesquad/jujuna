import axiosInstance from "./axiosInstance";

export const addToCart = async (credentials) => {
  const { data } = await axiosInstance.post(`/cart-item`, {
    productId: credentials.productId,
    title: credentials.title,
    image: credentials.image,
    price: credentials.price,
    unit: credentials.unit,
  });

  return data;
};

export const getCartItems = async (credentials) => {
  const { data } = await axiosInstance.get(`/cart-item`, {
    productId: credentials.productId,
    title: credentials.title,
    image: credentials.image,
    price: credentials.price,
    unit: credentials.unit,
  });

  return data;
};
