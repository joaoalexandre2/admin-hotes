
// // src/hooks/useRooms.ts
// import { useQuery } from "@tanstack/react-query";
// import { api } from "../api/client";

// export function useRooms(hotelId?: number) {
//   return useQuery(
//     ["rooms", hotelId],
//     async () => {
//       const res = hotelId
//         ? await api.get(`/hotels/${hotelId}/rooms`)
//         : await api.get("/rooms");
//       return res.data;
//     },
//       enabled: !!hotelId,
//   );
// }

// import { useQuery } from "@tanstack/react-query";
// import { api } from "../api/client";

// export function useRooms(hotelId?: number) {
//   return useQuery({
//     queryKey: ["rooms", hotelId],
//     queryFn: async () => {
//       const res = hotelId
//         ? await api.get(`/hotels/${hotelId}/rooms`)
//         : await api.get("/rooms");
//       return res.data;
//     },
//     enabled: !!hotelId, // só executa se hotelId existir
//   });
// }

import { useQuery } from "@tanstack/react-query";
import { api } from "../api/client";

export function useRooms(hotelId?: number) {
  return useQuery({
    queryKey: ["rooms", hotelId],
    queryFn: async () => {
      if (!hotelId) {
        const res = await api.get("/rooms"); // todos os quartos
        return res.data;
      } else {
        // URL correta de acordo com seu RoomController
        const res = await api.get(`/rooms/${hotelId}/rooms`);
        return res.data;
      }
    },
    enabled: !!hotelId, // só executa se hotelId existir
  });
}