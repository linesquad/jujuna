import axiosInstance from "./axiosInstance";

export const registerUser = async (userData) => {
  const { data } = await axiosInstance.post("signup", {
    username: userData.username,
    email: userData.email,
    phone: userData.phone,
    password: userData.password,
    confirmPassword: userData.confirmPassword,
  });

  return data;
};
