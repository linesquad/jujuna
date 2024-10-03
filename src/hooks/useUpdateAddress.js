import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateAddress } from "../services/apiAddress";

const useUpdateAddress = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: updateAddress,
    onSuccess: () => {
      console.log("address update succesfull");
      queryClient.invalidateQueries(["userAddress"]);
    },
    onError: (err) => {
      console.log("address not update", err);
    },
  });

  return mutation;
};

export default useUpdateAddress;
