import { useQuery } from "@tanstack/react-query";
import { fetchLatestBlogs } from "../services/apiLatest";

export const useLatestBlogs = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["latestBlog"],
    queryFn: fetchLatestBlogs,
    staleTime: 3000 * 60,
  });
  return { isLoading, data, isError, error };
};
