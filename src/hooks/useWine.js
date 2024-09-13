import { useQuery } from "@tanstack/react-query";
import { fetchWineById } from "../services/apiWines";

export const useWineById = (id) => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["wineById", id],
    queryFn: () => fetchWineById(id),
    refetchOnWindowFocus: false,
    staleTime: 60000,
    cacheTime: 300000,
  });
  console.log("single wine", id);
  return { isLoading, data, isError, error };
};
