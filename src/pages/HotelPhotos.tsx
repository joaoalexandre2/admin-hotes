import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../api/client"; // 👈 USE SUA API CENTRAL
import "../style/photos.css";
import { toast } from "react-toastify";

export default function HotelPhotos() {
  const { hotelId } = useParams();
  const queryClient = useQueryClient();

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleDeleteImage = async (url: string) => {
  try {
    await api.delete(`/hotels/${hotelId}/images`, {
      data: { url }
    });

    toast.success("Imagem removida com sucesso!");

    queryClient.invalidateQueries({
      queryKey: ["hotel-photos", hotelId],
    });

  } catch (error) {
    toast.error("Erro ao remover imagem");
  }
};

  // 📥 GET hotel
  const { data: hotel, isLoading } = useQuery({
    queryKey: ["hotel-photos", hotelId],
    queryFn: async () => {
      const res = await api.get(`/hotels/${hotelId}`);
      return res.data;
    },
    enabled: !!hotelId,
  });

  // 📤 UPLOAD imagem
  const uploadMutation = useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData();
      formData.append("file", file);

      await api.post(`/hotels/${hotelId}/images`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["hotel-photos", hotelId],
      });
      setSelectedFile(null);
      setPreview(null);
    },
  });

  // 🖼 preview
  useEffect(() => {
    if (!selectedFile) return;

    const url = URL.createObjectURL(selectedFile);
    setPreview(url);

    return () => URL.revokeObjectURL(url);
  }, [selectedFile]);

  const handleUpload = () => {
    if (!selectedFile) return;
    uploadMutation.mutate(selectedFile);
  };

  if (isLoading) {
    return (
      <div className="photos-container">
        <p>Carregando fotos...</p>
      </div>
    );
  }

  return (
    <div className="photos-container">
      <h1>Fotos do Hotel</h1>

      {/* UPLOAD */}
      <div className="upload-box">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
        />

        {preview && (
          <div className="preview">
            <img src={preview} alt="preview" />
          </div>
        )}

        <button
          onClick={handleUpload}
          disabled={!selectedFile || uploadMutation.isPending}
        >
          {uploadMutation.isPending ? "Enviando..." : "Enviar imagem"}
        </button>
      </div>

      {/* GALERIA */}
      <div className="gallery">
        {hotel?.images?.length > 0 ? (
          hotel.images.map((img: string, index: number) => (
            <div key={index} className="photo-card">
              <img src={img} alt={`hotel-${index}`} />
            </div>
          ))
        ) : (
          <p>Nenhuma imagem cadastrada</p>
        )}
      </div>
    </div>
  );
}