import axiosInstance from "./axiosInstance";
import axios from "axios";
export const fetchWines = async () => {
  const { data } = await axiosInstance.get(`/wines`);
  return data;
};

export const fetchWineById = async (id) => {
  const { data } = await axiosInstance.get(`/wine/${id}`);
  return data;
};

export const fetchWineCategories = async () => {
  const { data } = await axiosInstance.get("/wine-categories");
  return data;
};

export const fetchWinesByCategory = async (id) => {
  if (id.toLowerCase() === "allwines" || id.length === 0) return [];
  const { data } = await axiosInstance.get(`/category/${id}`);
  return data;
};

export const fetchWinesByPriceRange = async (minPrice, maxPrice) => {
  const { data } = await axios.get(
    `/price-range?minPrice=${minPrice}&maxPrice=${maxPrice}&isWine=true`
  );

  return data;
};
