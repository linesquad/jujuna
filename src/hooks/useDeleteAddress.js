import { useMutation } from "@tanstack/react-query";
import { removeAddress } from "../services/apiAddress";

const useDeleteAddress = () => {
  const { mutate } = useMutation({
    mutationFn: removeAddress,
    onSuccess: () => {
      console.log("address delete succesfull");
    },
    onError: (err) => {
      console.log("address does not delete", err);
    },
  });

  return mutate;
};

export default useDeleteAddress;
