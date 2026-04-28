// import { useMutation } from "@tanstack/react-query";
// //import axios from "axios";
// import { api } from "../api/client";

// type UploadPhotosParams = {
//   hotelId: string | undefined;
//   files: File[];
// };

// export function useUploadHotelPhotos() {
//   return useMutation({
//     mutationFn: async ({ hotelId, files }: UploadPhotosParams) => {
//       if (!hotelId) {
//         throw new Error("Hotel ID é obrigatório");
//       }

//       const formData = new FormData();

//       files.forEach((file) => {
//         formData.append("files", file);
//       });

//       // const response = await axios.post(
//       //   `/api/hotels/${hotelId}/photos`,
//       //   formData,
//       //   {
//       //     headers: {
//       //       "Content-Type": "multipart/form-data",
//       //     },
//       //   }
//       // );

//       //    const response =   await api.post(`/hotels/${hotelId}/photos`, formData, {
//       //   headers: {
//       //     "Content-Type": "multipart/form-data",
//       //   },
//       // });

//       const response = await api.post(
//         `/hotels/${hotelId}/photos`,
//         formData
//       );

//       return response.data;
//     },
//   });
// }

// novo 26/04/2026

import { useMutation } from "@tanstack/react-query";
import { api } from "../api/client";

type UploadPhotosParams = {
  hotelId: string;
  files: File[];
};

type UploadPhotosResponse = {
  urls: string[];
};

export function useUploadHotelPhotos() {
  return useMutation({
    mutationFn: async ({ hotelId, files }: UploadPhotosParams) => {
      const formData = new FormData();

      files.forEach((file) => {
        formData.append("files", file);
      });

      const response = await api.post<UploadPhotosResponse>(
        `/hotels/${hotelId}/photos`,
        formData
      );

      return response.data;
    },

    onError: (error) => {
      console.error("Erro ao enviar fotos:", error);
    },
  });
}