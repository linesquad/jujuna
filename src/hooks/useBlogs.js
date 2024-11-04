import { useQuery } from "@tanstack/react-query";
import { paginationBlogs } from "../services/apiBlogs"; // paginationBlogs, // fetchBlogsId,

export const usePaginatedBlogs = (page, limit = 3) => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["paginatedBlogs", page, limit],
    queryFn: () => paginationBlogs(page, limit),
    keepPreviousData: true,
    staleTime: 0,
  });

  return { isLoading, data, isError, error };
};
