import axiosInstance from "./axiosInstance";

export const fetchMinMaxRange = async (minPrice, maxPrice) => {
  const { data } = await axiosInstance.get(
    `/full-filter?isWine=true&minPrice=${minPrice}&maxPrice=${maxPrice}`
  );
  return data;
};
