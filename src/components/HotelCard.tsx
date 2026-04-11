// // src/components/HotelCard.tsx
// import { Link } from "react-router-dom";

// interface HotelCardProps {
//   hotel: {
//     id: number;
//     name: string;
//     city: string;
//     pricePerNight: number;
//     image?: string;
//   };
//   onDelete?: (id: number) => void;
// }

// export default function HotelCard({ hotel, onDelete }: HotelCardProps) {
//   return (
//     <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
      
//       {/* Imagem */}
//       <div className="h-48 bg-gray-200">
//         <img
//           src={hotel.image || "https://via.placeholder.com/400x200"}
//           alt={hotel.name}
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Conteúdo */}
//       <div className="p-4 flex flex-col gap-2">
//         <h2 className="text-lg font-bold">{hotel.name}</h2>
//         <p className="text-gray-600">{hotel.city}</p>
//         <p className="text-blue-600 font-semibold">
//           R$ {hotel.pricePerNight}
//         </p>

//         {/* Ações */}
//         <div className="flex gap-2 mt-3">
//           <Link
//             to={`/app/hotels/${hotel.id}/rooms`}
//             className="flex-1 text-center bg-blue-500 text-white py-1 rounded hover:bg-blue-600 transition"
//           >
//             Quartos
//           </Link>

//           <Link
//             to={`/app/hotels/edit/${hotel.id}`}
//             className="flex-1 text-center bg-yellow-500 text-white py-1 rounded hover:bg-yellow-600 transition"
//           >
//             Editar
//           </Link>

//           {onDelete && (
//             <button
//               onClick={() => onDelete(hotel.id)}
//               className="flex-1 bg-red-500 text-white py-1 rounded hover:bg-red-600 transition"
//             >
//               Deletar
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


// src/components/HotelCard.tsx

type Props = {
  hotel: {
    id: number;
    name: string;
    city: string;
    pricePerNight: number;
    image?: string;
  };
};

export default function HotelCard({ hotel }: Props) {
  return (
    <div className="card">
      <img
        src={hotel.image || "https://via.placeholder.com/300"}
        alt={hotel.name}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
          borderRadius: "10px",
          marginBottom: "10px",
        }}
      />

      <h3>{hotel.name}</h3>
      <p>{hotel.city}</p>

      <p style={{ marginTop: "10px", fontWeight: "bold" }}>
        R$ {hotel.pricePerNight} / noite
      </p>

      <button className="btn">Editar</button>
    </div>
  );
}