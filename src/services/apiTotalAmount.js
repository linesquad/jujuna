import axiosInstance from "./axiosInstance";

export const fetchTotalAmount = async () => {
  try {
    const { data } = await axiosInstance.get("/total-spend");
    return data;
  } catch (error) {
    console.error(error.message);
  }
};
