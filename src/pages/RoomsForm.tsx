// // src/pages/RoomForm.tsx
// import { useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { api } from "../api/client";

// export default function RoomForm() {
//   const navigate = useNavigate();
//   const { hotelId } = useParams<{ hotelId: string }>();

//   const [roomNumber, setRoomNumber] = useState<number>(0);
//   const [type, setType] = useState("");
//   const [beds, setBeds] = useState<number>(1);
//   const [capacity, setCapacity] = useState<number>(1);
//   const [price, setPrice] = useState<number>(0);
//   const [availability, setAvailability] = useState(true);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       await api.post("/rooms", {
//         hotelId: Number(hotelId),
//         roomNumber,
//         type,
//         beds,
//         capacity,
//         price,
//         availability,
//       });

//       alert("Quarto criado com sucesso!");
//       navigate(`/app/hotels/${hotelId}/rooms`);
//     } catch (error: any) {
//       alert(
//         error?.response?.data?.message || "Erro ao criar quarto"
//       );
//     }
//   };

//   return (
//     <div className="flex justify-center">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-6 rounded-2xl shadow w-full max-w-lg flex flex-col gap-4"
//       >
//         <h1 className="text-2xl font-bold mb-2">Novo Quarto</h1>

//         {/* Número */}
//         <input
//           type="number"
//           placeholder="Número do quarto"
//           value={roomNumber}
//           onChange={(e) => setRoomNumber(Number(e.target.value))}
//           className="border p-2 rounded"
//           required
//         />

//         {/* Tipo */}
//         <input
//           type="text"
//           placeholder="Tipo (Ex: Deluxe, Standard)"
//           value={type}
//           onChange={(e) => setType(e.target.value)}
//           className="border p-2 rounded"
//           required
//         />

//         {/* Camas */}
//         <input
//           type="number"
//           placeholder="Quantidade de camas"
//           value={beds}
//           onChange={(e) => setBeds(Number(e.target.value))}
//           className="border p-2 rounded"
//           required
//         />

//         {/* Capacidade */}
//         <input
//           type="number"
//           placeholder="Capacidade"
//           value={capacity}
//           onChange={(e) => setCapacity(Number(e.target.value))}
//           className="border p-2 rounded"
//           required
//         />

//         {/* Preço */}
//         <input
//           type="number"
//           placeholder="Preço"
//           value={price}
//           onChange={(e) => setPrice(Number(e.target.value))}
//           className="border p-2 rounded"
//           required
//         />

//         {/* Disponibilidade */}
//         <label className="flex items-center gap-2">
//           <input
//             type="checkbox"
//             checked={availability}
//             onChange={(e) => setAvailability(e.target.checked)}
//           />
//           Disponível
//         </label>

//         {/* Botões */}
//         <div className="flex gap-2 mt-4">
//           <button
//             type="submit"
//             className="flex-1 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
//           >
//             Salvar
//           </button>

//           <button
//             type="button"
//             onClick={() => navigate(-1)}
//             className="flex-1 bg-gray-300 py-2 rounded hover:bg-gray-400 transition"
//           >
//             Cancelar
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// src/pages/RoomsForm.tsx

// import { useState } from "react";
// import "../style/admin.css";

// export default function RoomsForm() {
//   const [form, setForm] = useState({
//     roomNumber: "",
//     type: "",
//     beds: "",
//     capacity: "",
//     price: "",
//     availability: true,
//     hotelId: "",
//   });

//   const handleChange = (e: any) => {
//     const { name, value, type, checked } = e.target;

//     setForm({
//       ...form,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleSubmit = (e: any) => {
//     e.preventDefault();
//     console.log(form);
//   };

//   return (
//     <div>
//       <div className="header">
//         <h2>Novo Quarto</h2>
//         <p>Cadastre um novo quarto</p>
//       </div>

//       <form
//         onSubmit={handleSubmit}
//         style={{
//           display: "grid",
//           gap: "15px",
//           maxWidth: "500px",
//         }}
//       >
//         <input
//           name="roomNumber"
//           placeholder="Número do quarto"
//           onChange={handleChange}
//           className="input"
//         />

//         <input
//           name="type"
//           placeholder="Tipo (Suite, Deluxe...)"
//           onChange={handleChange}
//           className="input"
//         />

//         <input
//           name="beds"
//           placeholder="Camas"
//           onChange={handleChange}
//           className="input"
//         />

//         <input
//           name="capacity"
//           placeholder="Capacidade"
//           onChange={handleChange}
//           className="input"
//         />

//         <input
//           name="price"
//           placeholder="Preço"
//           onChange={handleChange}
//           className="input"
//         />

//         <input
//           name="hotelId"
//           placeholder="ID do Hotel"
//           onChange={handleChange}
//           className="input"
//         />

//         <label style={{ display: "flex", gap: "10px" }}>
//           <input
//             type="checkbox"
//             name="availability"
//             checked={form.availability}
//             onChange={handleChange}
//           />
//           Disponível
//         </label>

//         <button className="btn">Salvar</button>
//       </form>
//     </div>
//   );
// }


// import { useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { api } from "../api/client";
// import "../style/hotelForm.css";

// export default function RoomsForm() {
//   const navigate = useNavigate();
//   const { hotelId } = useParams(); // 🔥 vem da rota

//   const [form, setForm] = useState({
//     roomNumber: "",
//     type: "",
//     beds: "",
//     capacity: "",
//     price: "",
//     availability: true,
//   });

//   const handleChange = (e: any) => {
//     const { name, value, type, checked } = e.target;

//     setForm({
//       ...form,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();

//     try {
//       await api.post("/rooms", {
//         ...form,
//         beds: Number(form.beds),
//         capacity: Number(form.capacity),
//         price: Number(form.price),
//         roomNumber: Number(form.roomNumber),
//         hotelId: Number(hotelId), // 🔥 vínculo correto
//       });

//       alert("Quarto criado!");
//       navigate(`/app/hotels`);
//     } catch (err) {
//       console.log(err);
//       alert("Erro ao criar quarto");
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Novo Quarto</h2>

//       <form onSubmit={handleSubmit} className="form">
//         <input name="roomNumber" placeholder="Número" onChange={handleChange} />
//         <input name="type" placeholder="Tipo" onChange={handleChange} />
//         <input name="beds" placeholder="Camas" onChange={handleChange} />
//         <input name="capacity" placeholder="Capacidade" onChange={handleChange} />
//         <input name="price" placeholder="Preço" onChange={handleChange} />

//         <label>
//           <input
//             type="checkbox"
//             name="availability"
//             checked={form.availability}
//             onChange={handleChange}
//           />
//           Disponível
//         </label>

//         <button className="btn">Salvar Quarto</button>
//       </form>
//     </div>
//   );
// }

// import { useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { api } from "../api/client";
// import "../style/hotelForm.css";

// export default function RoomsForm() {
//   const navigate = useNavigate();
//   const { hotelId } = useParams(); // 🔥 vem da rota

//   const [form, setForm] = useState({
//     roomNumber: "",
//     type: "",
//     beds: "",
//     capacity: "",
//     price: "",
//     availability: true,
//   });

//   const handleChange = (e: any) => {
//     const { name, value, type, checked } = e.target;

//     setForm({
//       ...form,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();

//     try {
//       await api.post("/rooms", {
//         ...form,
//         beds: Number(form.beds),
//         capacity: Number(form.capacity),
//         price: Number(form.price),
//         roomNumber: Number(form.roomNumber),
//         hotelId: Number(hotelId), // 🔥 vínculo correto
//       });

//       alert("Quarto criado!");
//       navigate(`/app/hotels/${hotelId}/rooms`);
//     } catch (err) {
//       console.log(err);
//       alert("Erro ao criar quarto");
//     }
//   };

//   return (
//     <div className="form-container">
//       <div className="form-card">
//         <h2 className="form-title">Novo Quarto</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Número do Quarto</label>
//             <input
//               name="roomNumber"
//               placeholder="Número"
//               value={form.roomNumber}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="form-group">
//             <label>Tipo</label>
//             <input
//               name="type"
//               placeholder="Tipo"
//               value={form.type}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="form-row">
//             <div className="form-group">
//               <label>Camas</label>
//               <input
//                 name="beds"
//                 placeholder="Camas"
//                 value={form.beds}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="form-group">
//               <label>Capacidade</label>
//               <input
//                 name="capacity"
//                 placeholder="Capacidade"
//                 value={form.capacity}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           <div className="form-group">
//             <label>Preço por Noite</label>
//             <input
//               name="price"
//               placeholder="Preço"
//               value={form.price}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="form-group">
//             <label>
//               <input
//                 type="checkbox"
//                 name="availability"
//                 checked={form.availability}
//                 onChange={handleChange}
//               />
//               Disponível
//             </label>
//           </div>

//           <button type="submit" className="button-submit">
//             Salvar Quarto
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../api/client";
import "../style/hotelForm.css";

export default function RoomsForm() {
  const navigate = useNavigate();

  // 🔥 pega hotelId (criação) e id (edição)
  const { hotelId, id } = useParams();

  const isEdit = !!id;

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    roomNumber: "",
    type: "",
    beds: "",
    capacity: "",
    price: "",
    availability: true,
  });

  // ============================
  // 🔥 CARREGAR DADOS (EDIÇÃO)
  // ============================
  useEffect(() => {
    if (isEdit) {
      setLoading(true);

      api
        .get(`/rooms/${id}`)
        .then((res) => {
          const room = res.data;

          setForm({
            roomNumber: String(room.roomNumber),
            type: room.type,
            beds: String(room.beds),
            capacity: String(room.capacity),
            price: String(room.price),
            availability: room.availability,
          });
        })
        .catch(() => {
          alert("Erro ao carregar quarto");
        })
        .finally(() => setLoading(false));
    }
  }, [id]);

  // ============================
  // INPUT CHANGE
  // ============================
  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // ============================
  // SUBMIT (CREATE + UPDATE)
  // ============================
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const payload = {
        ...form,
        beds: Number(form.beds),
        capacity: Number(form.capacity),
        price: Number(form.price),
        roomNumber: Number(form.roomNumber),
        hotelId: Number(hotelId), // 🔥 necessário no backend
      };

      if (isEdit) {
        await api.put(`/rooms/${id}`, payload);
        alert("Quarto atualizado!");
      } else {
        await api.post("/rooms", payload);
        alert("Quarto criado!");
      }

      navigate(`/app/hotels/${hotelId}/rooms`);
    } catch (err) {
      console.log(err);
      alert("Erro ao salvar quarto");
    }
  };

  // ============================
  // LOADING
  // ============================
  if (loading) {
    return <p style={{ textAlign: "center" }}>Carregando quarto...</p>;
  }

  // ============================
  // UI
  // ============================
  return (
    <div className="form-container">
      <div className="form-card">
        <h2 className="form-title">
          {isEdit ? "Editar Quarto" : "Novo Quarto"}
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Número do Quarto</label>
            <input
              name="roomNumber"
              value={form.roomNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Tipo</label>
            <input
              name="type"
              value={form.type}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Camas</label>
              <input
                name="beds"
                value={form.beds}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Capacidade</label>
              <input
                name="capacity"
                value={form.capacity}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Preço por Noite</label>
            <input
              name="price"
              value={form.price}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="availability"
                checked={form.availability}
                onChange={handleChange}
              />
              Disponível
            </label>
          </div>

          <button type="submit" className="button-submit">
            {isEdit ? "Atualizar Quarto" : "Salvar Quarto"}
          </button>
        </form>
      </div>
    </div>
  );
}