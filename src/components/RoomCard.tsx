// // src/components/RoomCard.tsx
// import { Link } from "react-router-dom";

// interface RoomCardProps {
//   room: {
//     id: number;
//     roomNumber: number;
//     type: string;
//     beds: number;
//     capacity: number;
//     price: number;
//     availability: boolean;
//   };
//   onDelete?: (id: number) => void;
// }

// export default function RoomCard({ room, onDelete }: RoomCardProps) {
//   return (
//     <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col gap-2">
      
//       {/* Header */}
//       <div className="flex justify-between items-center">
//         <h2 className="text-lg font-bold">
//           Quarto #{room.roomNumber}
//         </h2>

//         <span
//           className={`text-sm px-2 py-1 rounded ${
//             room.availability
//               ? "bg-green-100 text-green-700"
//               : "bg-red-100 text-red-700"
//           }`}
//         >
//           {room.availability ? "Disponível" : "Ocupado"}
//         </span>
//       </div>

//       {/* Info */}
//       <p className="text-gray-600">Tipo: {room.type}</p>
//       <p className="text-gray-600">Camas: {room.beds}</p>
//       <p className="text-gray-600">Capacidade: {room.capacity} pessoas</p>

//       <p className="text-blue-600 font-semibold text-lg mt-1">
//         R$ {room.price}
//       </p>

//       {/* Ações */}
//       <div className="flex gap-2 mt-3">
//         <Link
//           to={`/app/rooms/edit/${room.id}`}
//           className="flex-1 text-center bg-yellow-500 text-white py-1 rounded hover:bg-yellow-600 transition"
//         >
//           Editar
//         </Link>

//         {onDelete && (
//           <button
//             onClick={() => onDelete(room.id)}
//             className="flex-1 bg-red-500 text-white py-1 rounded hover:bg-red-600 transition"
//           >
//             Deletar
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// src/components/RoomCard.tsx

// type Props = {
//   room: {
//     id: number;
//     type: string;
//     beds: number;
//     capacity: number;
//     price: number;
//     availability: boolean;
//   };
// };

// export default function RoomCard({ room }: Props) {
//   return (
//     <div className="card">
//       <h3>{room.type}</h3>

//       <p>Camas: {room.beds}</p>
//       <p>Capacidade: {room.capacity}</p>

//       <p style={{ marginTop: "10px", fontWeight: "bold" }}>
//         R$ {room.price}
//       </p>

//       <span
//         style={{
//           display: "inline-block",
//           marginTop: "10px",
//           padding: "5px 10px",
//           borderRadius: "8px",
//           background: room.availability ? "#22c55e" : "#ef4444",
//           color: "white",
//           fontSize: "12px",
//         }}
//       >
//         {room.availability ? "Disponível" : "Indisponível"}
//       </span>
//     </div>
//   );
// }

// import "../style/roomCard.css";

// type Props = {
//   room: {
//     id: number;
//     type: string;
//     beds: number;
//     capacity: number;
//     price: number;
//     availability: boolean;
//     images?: string[];
//   };
//   onClick?: () => void;
// };

// import "../style/roomCard.css";

// export default function RoomCard({ room, onClick }: Props) {
//   return (
//     <div className="room-card" onClick={onClick}>
//       <div className="relative">
//         <img
//           src={room.images?.[0] || "https://via.placeholder.com/400x250?text=Sem+Imagem"}
//           alt={room.type}
//         />
//         <span className={`badge ${room.availability ? "available" : "unavailable"}`}>
//           {room.availability ? "Disponível" : "Indisponível"}
//         </span>
//       </div>

//       <div className="content">
//         <h3>{room.type}</h3>
//         <div className="room-info">
//           <span>🛏 {room.beds} camas</span>
//           <span>👤 {room.capacity} pessoas</span>
//         </div>

//         <div className="price-row">
//           <span className="price">R$ {room.price}</span>
//           <button
//             className="edit-button"
//             onClick={(e) => {
//               e.stopPropagation();
//               alert("Editar quarto " + room.id);
//             }}
//           >
//             Editar
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


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

              navigate(`/app/rooms/edit/${room.id}`); // 🔥 AQUI
            }}
          >
            Editar
          </button>
        </div>
      </div>
    </div>
  );
}
