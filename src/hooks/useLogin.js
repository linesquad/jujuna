import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../services/apiLogin";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  const mutate = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      navigate("/login");
    },
    onError: (err) => {
      console.log("Login error", err);
    },
  });

  return mutate;
};
