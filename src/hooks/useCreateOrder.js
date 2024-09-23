import { useMutation } from "@tanstack/react-query";
import { createOrder } from "../services/apiOrders";

const useCreateOrder = () => {
  const { mutate, isLoading, isSuccess, data } = useMutation({
    mutationFn: createOrder,
    onSuccess: (data) => {
      console.log("create order successfully", data);
    },
    onError: (err) => {
      console.log(err.message);
    },
  });

  return { mutate, isLoading, data, isSuccess };
};

export default useCreateOrder;
