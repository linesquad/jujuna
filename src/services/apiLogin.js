import axiosInstance from "./axiosInstance";

export const loginUser = async (credentials) => {
  const { data } = await axiosInstance.post("/login", {
    email: credentials.email,
    password: credentials.password,
  });

  return data;
};
