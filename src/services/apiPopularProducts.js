import axiosInstance from "./axiosInstance";

export const fetchPopularProducts = async () => {
  const res = await axiosInstance.get("/popular-products?page=1&isWine=true");
  return res.data;
};
