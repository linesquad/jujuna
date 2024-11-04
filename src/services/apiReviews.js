import axiosInstance from "./axiosInstance";

export const fetchReviews = async () => {
  try {
    const { data } = await axiosInstance.get("/customer-feedback");

    return data;
  } catch (error) {
    console.error(error.message);
  }
};
