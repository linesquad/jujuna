import { useMutation } from "@tanstack/react-query";
import { registerNewUser } from "../services/apiRegistration";

export const useRegistration = (userID) => {
  const { mutate: registerUser } = useMutation({
    mutationKey: ["clients", userID],
    mutationFn: (user) => registerNewUser(user),
  });
  return { registerUser };
};
