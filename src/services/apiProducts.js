import axiosInstance from "./axiosInstance";

export const fetchMinMaxRange = async (isWine, target) => {
  const { data } = await axiosInstance.get(
    `/min-max-range?isWine=${isWine}&target=${target}`
  );
  return data;
};
