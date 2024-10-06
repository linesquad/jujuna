import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../services/apiRegister";
import { useDispatch } from "react-redux";
import { openAuthModal } from "../features/authSlice";

export const useRegister = () => {
  const dispatch = useDispatch();
  const { mutate, data } = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      dispatch(openAuthModal());
    },
    onError: (err) => {
      console.log("reg err", err);
    },
  });

  return { mutate, data };
};
