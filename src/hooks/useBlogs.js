import { useQuery } from "@tanstack/react-query";
import fetchBlogs from "../services/apiBlogs";

const useBlogs = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["blog"],
    queryFn: fetchBlogs,
    staleTime: 0,
  });

  return { isLoading, data, isError, error };
};

export default useBlogs;
