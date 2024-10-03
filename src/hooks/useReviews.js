import { useQuery } from "@tanstack/react-query";
import { fetchReviews } from "../services/apiReviews";

export const useReviews = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["reviews"],
    queryFn: fetchReviews,
    staleTime: 0,
  });

  return { data, isLoading, isError, error };
};
