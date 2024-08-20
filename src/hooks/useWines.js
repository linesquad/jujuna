import { useQuery } from "@tanstack/react-query";
import fetchWines, { fetchWineById } from "../services/apiWines";

const useWines = (type) => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["wine"],
    queryFn: () => fetchWines(type),
    staleTime: 0,
  });

  return { isLoading, data, isError, error };
};

export const useWineById = (id) => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["wineById", id],
    queryFn: () => fetchWineById(id),
    staleTime: 0,
  });
  return { isLoading, data, isError, error };
};

export default useWines;
