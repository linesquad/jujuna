import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../services/apiRegister";
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
  const navigate = useNavigate();
  const mutate = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      navigate("signup");
    },
    onError: (err) => {
      console.log("reg err", err);
    },
  });

  return mutate;
};
