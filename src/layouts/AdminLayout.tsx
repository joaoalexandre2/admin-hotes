
// import { Outlet } from "react-router-dom";
// import Sidebar from "../components/Sidebar";

// export default function AdminLayout() {
//   return (
//     <div className="flex min-h-screen">
//       <Sidebar />

//       <main className="flex-1 bg-gray-100 p-6">
//         <Outlet /> {/* Renderiza as rotas filhas aqui */}
//       </main>
//     </div>
//   );
// }

// src/layouts/AdminLayout.tsx
// import { Outlet } from "react-router-dom";
// import Sidebar from "../components/Sidebar";

// export default function AdminLayout() {
//   return (
//     <div className="flex min-h-screen">
//       <Sidebar />
//       <main className="flex-1 bg-gray-100 p-6">
//         <Outlet />
//       </main>
//     </div>
//   );
// }


// Novo

// src/layouts/AdminLayout.tsx
// import { Outlet } from "react-router-dom";
// import Sidebar from "../components/Sidebar";

// export default function AdminLayout() {
//   return (
//     <div className="flex bg-gray-100 min-h-screen">
      
//       <Sidebar />

//       <main className="flex-1 p-8">
        
//         {/* Header */}
//         <div className="mb-6">
//           <h1 className="text-2xl font-bold text-gray-800">
//             Painel Administrativo
//           </h1>
//           <p className="text-gray-500">
//             Gerencie hotéis e quartos
//           </p>
//         </div>

//         {/* Conteúdo */}
//         <div className="bg-white p-6 rounded-2xl shadow">
//           <Outlet />
//         </div>

//         <h1 className="text-6xl text-blue-500 font-bold">
//             TESTE TAILWIND
//         </h1>

//       </main>
//     </div>
//   );
// }

import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../style/admin.css";

export default function AdminLayout() {
  return (
    <div className="layout">
      <Sidebar />

      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}