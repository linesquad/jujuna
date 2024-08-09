import { useQuery } from "@tanstack/react-query";
import { fetchLatestBlogs, fetchLatestCocktails } from "../services/apiLatest";

export const useLatestBlogs = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["latestBlog"],
    queryFn: fetchLatestBlogs,
    staleTime: 0,
  });

  return { isLoading, data, isError, error };
};

export const useLatestCocktails = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["latestCocktails"],
    queryFn: fetchLatestCocktails,
    staleTime: 0,
  });

  return { isLoading, data, isError, error };
};
