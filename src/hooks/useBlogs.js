import { useQuery } from "@tanstack/react-query";
import fetchBlogs, { fetchBlogsId } from "../services/apiBlogs";
import { useParams } from "react-router-dom";

const useBlogs = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["blog"],
    queryFn: fetchBlogs,
    staleTime: 0,
  });

  return { isLoading, data, isError, error };
};

export default useBlogs;

export const useBlogId = () => {
  const { id } = useParams();

  const { isLoading, data, isError, error } = useQuery({
    queryKey: [`blogById`, id],
    queryFn: () => fetchBlogsId(id),
    staleTime: 0,
  });

  return { isLoading, data, isError, error };
};
