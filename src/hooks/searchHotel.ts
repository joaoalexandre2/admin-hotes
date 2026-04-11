import { useQuery } from "@tanstack/react-query";
import { api } from "../api/client";

export const useHotel = (id: string) => {
  return useQuery({
    queryKey: ["hotel", id],
    queryFn: async () => {
      const res = await api.get(`/hotels/${id}`);
      return res.data;
    },
    enabled: !!id
  });
};