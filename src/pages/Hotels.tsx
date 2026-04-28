

// import { useHotels } from "../hooks/useHotels";
// import { useNavigate } from "react-router-dom";
// import { useDeleteHotel } from "../hooks/useDeleteHotel";
// import "../style/hotel.css";

// export default function Hotels() {
//   const { data, isLoading, error } = useHotels();
//   const navigate = useNavigate();
//   const { mutate: deleteHotel } = useDeleteHotel();

//   // 🔥 Normalização segura (resolve teu bug de vez)
//   //const hotels = data?.content ?? [];
//   const hotels = data || [];

//   console.log("DATA:", data);
//   console.log("HOTELS:", hotels);

//   // LOADING
//   if (isLoading) {
//     return (
//       <div className="hotels-container">
//         <p>Carregando hotéis...</p>
//       </div>
//     );
//   }

//   // ERROR
//   if (error) {
//     return (
//       <div className="hotels-container">
//         <p className="error-text">Erro ao carregar hotéis</p>
//       </div>
//     );
//   }

//   return (
//     <div className="hotels-container">
//       {/* HEADER */}
//       <div className="hotels-header">
//         <h1 className="hotels-title">Hotéis</h1>

//         {/* <button
//           className="btn-new"
//           onClick={() => navigate("/app/hotels/new")}
//         >
//           <span>+</span>
//           Novo Hotel
//         </button> */}
//       </div>

//       {/* EMPTY STATE */}
//       {hotels.length === 0 ? (
//         <div className="empty-state">
//           <p>Nenhum hotel cadastrado</p>

//           <button
//             onClick={() => navigate("/app/hotels/new")}
//             className="btn-primary"
//           >
//             Criar primeiro hotel
//           </button>
//         </div>
//       ) : (
//         <div className="hotels-grid">
//           {/* CARD NOVO HOTEL */}
//           <div
//             className="new-card"
//             onClick={() => navigate("/app/hotels/new")}
//           >
//             <span>+</span>
//             <p>Novo Hotel</p>
//           </div>

//           {/* LISTA */}
//           {hotels.map((hotel: any) => (
//             <div key={hotel.id} className="hotel-card">
//               {/* IMAGEM */}
//               <div className="hotel-image" />

//               {/* INFO */}
//               <div className="hotel-info">
//                 <h2 className="hotel-name">{hotel.name}</h2>
//                 <p className="hotel-city">{hotel.city}</p>

//                 <p className="hotel-price">
//                   R$ {hotel.pricePerNight}
//                 </p>
//               </div>

//               {/* ACTIONS */}
//               <div className="hotel-actions">
//                 {/* <button
//                   className="btn-view"
//                   onClick={() => navigate(`/app/hotels/${hotel.id}`)}
//                 >
//                   Ver
//                 </button> */}

//                 <button
//                   className="btn-view"
//                   onClick={() => navigate(`/app/hotels/${hotel.id}/rooms`)}
//                 >
//                   Quartos
//                 </button>

//                 <button
//                   className="btn-edit"
//                   onClick={() => navigate(`/app/hotels/edit/${hotel.id}`)}
//                 >
//                   Editar
//                 </button>

//                 <button
//                   className="btn-delete"
//                   onClick={() => {
//                     const confirmDelete = confirm("Tem certeza que deseja excluir?");

//                     if (confirmDelete) {
//                       deleteHotel(hotel.id);
//                     }
//                   }}
//                 >
//                   Excluir
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//     </div>


//   );
// }

import { useHotels } from "../hooks/useHotels";
import { useNavigate } from "react-router-dom";
import { useDeleteHotel } from "../hooks/useDeleteHotel";
import "../style/hotel.css";

export default function Hotels() {
  const { data, isLoading, error } = useHotels();
  const navigate = useNavigate();
  const { mutate: deleteHotel } = useDeleteHotel();

  const hotels = data || [];

  console.log("DATA:", data);
  console.log("HOTELS:", hotels);

  // LOADING
  if (isLoading) {
    return (
      <div className="hotels-container">
        <p>Carregando hotéis...</p>
      </div>
    );
  }

  // ERROR
  if (error) {
    return (
      <div className="hotels-container">
        <p className="error-text">Erro ao carregar hotéis</p>
      </div>
    );
  }

  return (
    <div className="hotels-container">
      {/* HEADER */}
      <div className="hotels-header">
        <h1 className="hotels-title">Hotéis</h1>
      </div>

      {/* EMPTY STATE */}
      {hotels.length === 0 ? (
        <div className="empty-state">
          <p>Nenhum hotel cadastrado</p>

          <button
            onClick={() => navigate("/app/hotels/new")}
            className="btn-primary"
          >
            Criar primeiro hotel
          </button>
        </div>
      ) : (
        <div className="hotels-grid">
          {/* CARD NOVO HOTEL */}
          <div
            className="new-card"
            onClick={() => navigate("/app/hotels/new")}
          >
            <span>+</span>
            <p>Novo Hotel</p>
          </div>

          {/* LISTA */}
          {hotels.map((hotel: any) => (
            <div key={hotel.id} className="hotel-card">
              {/* IMAGEM */}
              <div className="hotel-image" />

              {/* INFO */}
              <div className="hotel-info">
                <h2 className="hotel-name">{hotel.name}</h2>
                <p className="hotel-city">{hotel.city}</p>

                <p className="hotel-price">
                  R$ {hotel.pricePerNight}
                </p>
              </div>

              {/* ACTIONS */}
              <div className="hotel-actions">
                <button
                  className="btn-view"
                  onClick={() => navigate(`/app/hotels/${hotel.id}/rooms`)}
                >
                  Quartos
                </button>

                {/* 🔥 NOVO BOTÃO */}
                <button
                  className="btn-view"
                  onClick={() => navigate(`/app/hotels/${hotel.id}/photos`)}
                >
                  Fotos
                </button>

                <button
                  className="btn-edit"
                  onClick={() => navigate(`/app/hotels/edit/${hotel.id}`)}
                >
                  Editar
                </button>

                <button
                  className="btn-delete"
                  onClick={() => {
                    const confirmDelete = confirm("Tem certeza que deseja excluir?");
                    if (confirmDelete) {
                      deleteHotel(hotel.id);
                    }
                  }}
                >
                  Excluir
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}