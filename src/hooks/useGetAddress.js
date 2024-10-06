import { useQuery } from "@tanstack/react-query";
import { getAddress } from "../services/apiAddress";

const useGetAddress = () => {
  const { data, isError, error, isLoading, refetch } = useQuery({
    queryFn: getAddress,
    queryKey: ["userAddress"],
    // staleTime: 0,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return { isLoading, isError, error, data, refetch };
};

export default useGetAddress;
