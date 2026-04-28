

import { useNavigate } from "react-router-dom";
import "../style/roomCard.css";

type Props = {
  room: {
    id: number;
    type: string;
    beds: number;
    capacity: number;
    price: number;
    availability: boolean;
    images?: string[];
  };
};

export default function RoomCard({ room }: Props) {
  const navigate = useNavigate();

  return (
    <div className="room-card">
      <div className="relative">
        <img
          src={room.images?.[0] || "https://via.placeholder.com/400x250?text=Sem+Imagem"}
          alt={room.type}
        />
        <span className={`badge ${room.availability ? "available" : "unavailable"}`}>
          {room.availability ? "Disponível" : "Indisponível"}
        </span>
      </div>

      <div className="content">
        <h3>{room.type}</h3>

        <div className="room-info">
          <span>🛏 {room.beds} camas</span>
          <span>👤 {room.capacity} pessoas</span>
        </div>

        <div className="price-row">
          <span className="price">R$ {room.price}</span>

          <button
            className="edit-button"
            onClick={(e) => {
              e.stopPropagation();

              navigate(`/app/rooms/edit/${room.id}`); 
            }}
          >
            Editar
          </button>
        </div>
      </div>
    </div>
  );
}
