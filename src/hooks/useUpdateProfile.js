import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchUpdateProfile } from "../services/apiCustomer";

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: fetchUpdateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries(["findCustomer"]);
    },
  });

  return mutate;
};
