import { useQuery } from "@tanstack/react-query";
import { fetchMinMaxRange } from "../services/apiProducts";

export const useMinMaxRange = (isWine, target) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["minMax", isWine, target],
    queryFn: () => fetchMinMaxRange(isWine, target),
  });

  return { data, isLoading, isError, error };
};
