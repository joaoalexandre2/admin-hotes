import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../api/client";

export const useDeleteHotel = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => {
      await api.delete(`/hotels/${id}`);
    },

    onSuccess: () => {
      // 🔥 Atualiza lista automaticamente
      queryClient.invalidateQueries(["hotels"]);
    }
  });
};