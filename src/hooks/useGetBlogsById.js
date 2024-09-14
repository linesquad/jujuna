import { useQuery } from "@tanstack/react-query";
import { getBlogsById } from "../services/apiBlogs";

export const useGetBlogsById = (blogId) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["getBlogsById", blogId],
    queryFn: () => getBlogsById(blogId),
    staleTime: 3000 * 60,
  });
  console.log(data);
  //   console.log("nugo");
  return { data, isLoading, isError, error };
};
