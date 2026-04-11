import { useQuery } from "@tanstack/react-query";
import { api } from "../api/client";

export function useHotels() {
  return useQuery({
    queryKey: ["hotels"],
    queryFn: async () => {
      const res = await api.get("/hotels");
      return res.data.content; // importante (Spring Page)
    }
  });
}

