import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../api/client";

export const useUpdateHotel = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, data }: any) => {
      await api.put(`/hotels/${id}`, data);
    },

    onSuccess: () => {
      queryClient.invalidateQueries(["hotels"]);
    }
  });
};