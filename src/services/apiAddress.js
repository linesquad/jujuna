import axiosInstance from "./axiosInstance";

export const addAddress = async (credentials) => {
  const { data } = await axiosInstance.post(`/address`, {
    state: credentials.state,
    address1: credentials.address1,
    postalCode: credentials.postalCode,
    city: credentials.city,
    country: credentials.country,
  });

  return data;
};

export const getAddress = async () => {
  const { data } = await axiosInstance.get(`/customer-address`);
  return data;
};

export const removeAddress = async () => {
  const { data } = await axiosInstance.delete(`/remove-address`);
  return data;
};
