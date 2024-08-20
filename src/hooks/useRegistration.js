import { useMutation, useQueryClient } from "@tanstack/react-query";
import { registration } from "../services/registration";
import { toast } from "react-toastify";

export const useRegistration = () => {
  const queryClient = useQueryClient();
  const { mutate: registerUser, isLoading } = useMutation({
    mutationKey: ["userRegistration"],
    mutationFn: ({ email, password }) => registration(email, password),
    onSuccess: () => {
      toast.success("Registration successful!");
      queryClient.invalidateQueries({
        queryKey: ["clients"],
      });
    },
    onError: (error) => {
      if (error.message.includes("Email rate limit exceeded")) {
        toast.error("Too many requests. Please try again later.");
      } else {
        toast.error(error.message);
      }
    },
  });

  return { registerUser, isLoading };
};
