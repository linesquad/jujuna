import { useQuery } from "@tanstack/react-query";
import { fetchFindCustomer } from "../services/apiCustomer";

export const useFindCustomer = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["findCustomer"],
    queryFn: fetchFindCustomer,
    staleTime: 0,
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, isError, error };
};
