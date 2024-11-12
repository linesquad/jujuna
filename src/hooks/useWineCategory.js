import { useQuery } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=5895b779";
import { fetchWinesByCategory } from "/src/services/apiWines.js";

export const useWinesByCategory = (id) => {
  const normalizedId = id ? id.toLowerCase() : "";

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["wine", normalizedId],
    queryFn: () => fetchWinesByCategory(normalizedId),
    refetchOnWindowFocus: false,
    staleTime: 60000,
    cacheTime: 300000,
    enabled: normalizedId !== "allwines" && normalizedId.length > 0,
  });

  return { isLoading, data, isError, error };
};
