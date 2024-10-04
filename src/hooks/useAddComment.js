import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addComment } from "../services/apiComment";

export const useAddComment = () => {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: addComment,
    onSuccess: () => {
      queryClient.invalidateQueries(["getBlogsById"]);
    },
  });

  return mutate;
};
