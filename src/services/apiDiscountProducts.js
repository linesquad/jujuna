import axiosInstance from "./axiosInstance";

export const fetchDiscountProducts = async () => {
  const res = await axiosInstance.get("/discount");
  return res.data;
};
