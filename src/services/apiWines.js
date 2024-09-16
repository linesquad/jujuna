import axiosInstance from "./axiosInstance";

export const fetchWines = async () => {
  const { data } = await axiosInstance.get(`/wines`);
  console.log("api of wines");
  return data;
};

export const fetchWineById = async (id) => {
  const { data } = await axiosInstance.get(`/wine/${id}`);
  console.log("api of single wine");
  return data;
};

export const fetchWineCategories = async () => {
  const { data } = await axiosInstance.get("/wine-categories");
  return data;
};

export const fetchWinesByCategory = async (id) => {
  if (id.length === 0) return;
  const { data } = await axiosInstance.get(`/category/${id}`);
  return data;
};
