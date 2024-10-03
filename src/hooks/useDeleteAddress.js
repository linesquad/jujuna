import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeAddress } from "../services/apiAddress";

const useDeleteAddress = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: removeAddress,
    onSuccess: () => {
      console.log("address delete succesfull");
      queryClient.invalidateQueries(["userAddress"]);
    },
    onError: (err) => {
      console.log("address does not delete", err);
    },
  });

  return mutate;
};

export default useDeleteAddress;
