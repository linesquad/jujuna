import axiosInstance from "./axiosInstance";

export const fetchFindCustomer = async () => {
  try {
    const { data } = await axiosInstance.get("/find-customer");
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

export const fetchUpdateProfile = async (credentials) => {
  try {
    const { data } = await axiosInstance.put("/update-profile", {
      phone: credentials.phone,
      username: credentials.username,
    });
    return data;
  } catch (error) {
    console.error(error.message);
  }
};
