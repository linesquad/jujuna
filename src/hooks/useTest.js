import { useQuery } from "@tanstack/react-query";
import { fetchTestApi } from "../services/apiTest";

const useTest = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["test"],
    queryFn: fetchTestApi,
    staleTime: 0,
  });

  return { isLoading, data, isError, error };
};

export default useTest;
