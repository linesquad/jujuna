import { useQuery } from "@tanstack/react-query";
import fetchBlogs from "./apiBlogs";

const useFetchAllBlogs = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["blog"],
    queryFn: fetchBlogs,
    staleTime: 3000 * 60,
  });

  return { isLoading, data, isError, error };
};

export default useFetchAllBlogs;
