import axiosInstance from "./axiosInstance";

export const searchProducts = async (title, flag) => {
  const { data } = await axiosInstance.get(
    `/search-byName?title=${title}&flag=${flag}`
  );
  console.log(data);
  return data;
};
