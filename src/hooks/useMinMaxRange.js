import { useQuery } from "@tanstack/react-query";
import { fetchMinMaxRange } from "../services/apiProducts";

export const useMinMaxRange = (minPrice, maxPrice) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["minMax", minPrice, maxPrice],
    queryFn: () => fetchMinMaxRange(minPrice, maxPrice),
    enabled: minPrice !== undefined && maxPrice !== undefined,
  });
  

  return { data, isLoading, isError, error };
};
