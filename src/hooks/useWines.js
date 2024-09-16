import { useQuery } from "@tanstack/react-query";
import { fetchWines, fetchWinesByCategory } from "../services/apiWines";

export const useWines = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["wine"],
    queryFn: () => fetchWines(),

    refetchOnWindowFocus: false,
    staleTime: 60000,
    cacheTime: 300000,
  });
  console.log("wines");
  return { isLoading, data, isError, error };
};

// export const useWinesByCategory = () => {
//   const queryClient = useQueryClient();

//   const { mutate, isLoading, data, isError, error } = useMutation({
//     mutationFn: (id) => fetchWinesByCategory(id),
//     onSuccess: () => {
//       queryClient.invalidateQueries({
//         queryKey: ["wine"],
//       });
//     },
//     onError: (error) => {
//       console.log(error);
//     },
//   });

//   return { mutate, isLoading, data, isError, error };
// };

export const useWinesByCategory = (id) => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["wine", id],
    queryFn: () => fetchWinesByCategory(id),
    refetchOnWindowFocus: false,
    staleTime: 60000,
    cacheTime: 300000,
  });
  return { isLoading, data, isError, error };
};
