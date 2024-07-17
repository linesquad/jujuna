import { useQuery } from "@tanstack/react-query";
import fetchWines from "../services/apiWines";

const useWines = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["wine"],
    queryFn: fetchWines,
    staleTime: 0,
  });

  return { isLoading, data, isError, error };
};

export default useWines;
