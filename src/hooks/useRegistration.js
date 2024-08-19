import { useMutation, useQueryClient } from "@tanstack/react-query";
import { registration } from "../services/registration";
import { toast } from "react-toastify";

export const useRegistration = () => {
  const queryClient = useQueryClient();
  const { mutate: registerUser, isLoading } = useMutation({
    mutationKey: ["user"],
    mutationFn: ({ email, password }) => registration(email, password),
    onSuccess: () => {
      toast.success("yeeees");
      queryClient.invalidateQueries({
        queryKey: ["clients"],
      });
    },
    onError: (error) => toast.error(error.message),
  });

  return { registerUser, isLoading };
};
