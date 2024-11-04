import axiosInstance from "./axiosInstance";

export const fetchMostPurchasedProducts = async () => {
  try {
    const { data } = await axiosInstance.get("/most-sold-products");
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
