// // src/pages/Rooms.tsx
// import { useRooms } from "../hooks/useRooms";

// export default function Rooms({ hotelId }: { hotelId?: number }) {
//   const { data, isLoading } = useRooms(hotelId);

//   if (isLoading) return <p>Carregando...</p>;

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Quartos</h1>
//       <div className="grid gap-4">
//         {data?.map((room: any) => (
//           <div key={room.id} className="bg-white p-4 rounded shadow">
//             <p>Tipo: {room.type}</p>
//             <p>Preço: R$ {room.price}</p>
//             <p>Disponível: {room.availability ? "Sim" : "Não"}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// New 

// // src/pages/Rooms.tsx
// import { useParams, useNavigate } from "react-router-dom";
// import { useRooms } from "../hooks/useRooms";
// import RoomCard from "../components/RoomCard";

// export default function Rooms() {
//   const { hotelId } = useParams();
//   const navigate = useNavigate();

//   // 🔥 Só busca se hotelId existir
//   const { data: rooms, isLoading, error } = useRooms(hotelId ? Number(hotelId) : undefined);

//   if (isLoading) return <p>Carregando quartos...</p>;
//   if (error) return <p>Erro ao carregar quartos</p>;
//   if (!rooms || rooms.length === 0) return <p>Nenhum quarto cadastrado</p>;

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Quartos</h1>

//       {/* BOTÃO NOVO QUARTO */}
//       <button
//         onClick={() => navigate(`/app/hotels/${hotelId}/rooms/new`)}
//         className="bg-indigo-600 text-white px-4 py-2 rounded mb-4"
//       >
//         + Novo Quarto
//       </button>

//       {/* LISTA DE QUARTOS */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {rooms.map((room: any) => (
//           <RoomCard key={room.id} room={room} />
//         ))}
//       </div>
//     </div>
//   );
// }

// new 2

import { useParams, useNavigate } from "react-router-dom";
import { useRooms } from "../hooks/useRooms";
import RoomCard from "../components/RoomCard";
import "../style/hotel.css";

export default function Rooms() {
  const { hotelId } = useParams();
  const navigate = useNavigate();

  // Busca os quartos do hotel
  const { data, isLoading, isError } = useRooms(Number(hotelId));

  if (isLoading) return <p>Carregando...</p>;
  if (isError) return <p>Erro ao carregar os quartos. Tente novamente.</p>;

  // Garantir que rooms seja sempre um array
  const rooms = data || [];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Quartos</h1>

      {/* BOTÃO NOVO QUARTO - sempre visível */}
      <button
        onClick={() => navigate(`/app/hotels/${hotelId}/rooms/new`)}
        className="bg-indigo-600 text-white px-4 py-2 rounded mb-6"
      >
        + Novo Quarto
      </button>

      {/* Mensagem caso não existam quartos */}
      {rooms.length === 0 ? (
        <p className="text-gray-500">
          Nenhum quarto cadastrado ainda. Clique em "Novo Quarto" para adicionar.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {rooms.map((room: any) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      )}
    </div>
  );
}