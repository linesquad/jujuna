import axiosInstance from "./axiosInstance";

export const createOrder = async (credentials) => {
  const { data } = await axiosInstance.post("/create-order", {
    totalAmount: credentials.totalAmount,
    postalCode: credentials.postalCode,
    city: credentials.city,
    state: credentials.state,
    country: credentials.country,
    currentAddress: credentials.currentAddress,
    note: credentials.note,
  });

  return data;
};
