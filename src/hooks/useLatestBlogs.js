import { useQuery } from "@tanstack/react-query";
import { fetchLatestBlogs } from "../services/apiLatest";

const useLatestBlogs = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["latestBlog"],
    queryFn: fetchLatestBlogs,
    staleTime: 0,
  });

  return { isLoading, data, isError, error };
};

export default useLatestBlogs;
