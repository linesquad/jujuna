import { useQuery } from "@tanstack/react-query";
import fetchBlogs, {
  fetchBlogsId,
  paginationBlogs,
} from "../services/apiBlogs";

const useBlogs = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["blog"],
    queryFn: fetchBlogs,
    staleTime: 0,
  });

  return { isLoading, data, isError, error };
};

export default useBlogs;

export const useBlogId = (id) => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: [`blogById`, id],
    queryFn: () => fetchBlogsId(id),
    staleTime: 0,
  });

  return { isLoading, data, isError, error };
};

export const usePaginatedBlogs = (page, limit = 3) => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["paginatedBlogs", page, limit],
    queryFn: () => paginationBlogs(page, limit),
    keepPreviousData: true,
    staleTime: 0,
  });

  return { isLoading, data, isError, error };
};
