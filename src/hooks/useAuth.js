import { useMutation } from "@tanstack/react-query";
import signup, { login } from "../services/apiAuth";

const useRegistration = () => {
  const { mutate, isLoading, isError, error, data } = useMutation({
    mutationKey: ["registerUser"],
    mutationFn: (userData) => signup(userData),
  });

  return { registerUser: mutate, isLoading, isError, error, data };
};

export const useLogin = () => {
  const { mutate, isLoading, isError, error, data } = useMutation({
    mutationKey: ["loginUser"],
    mutationFn: (loginData) => login(loginData),
  });

  return { loginUser: mutate, isLoading, isError, error, data };
};

export default useRegistration;
