import { useMutation } from "@tanstack/react-query";
import { addAddress } from "../services/apiAddress";

const useAddToAddress = () => {
  const { mutate, isPending, data } = useMutation({
    mutationFn: addAddress,
    onSuccess: () => {
      console.log("address add to successfull");
    },
    onError: (err) => {
      console.log("addres does not add", err);
    },
  });
  return { mutate, isPending, data };
};

export default useAddToAddress;
