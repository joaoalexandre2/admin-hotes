

// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Login from "./pages/Login";
// import Hotels from "./pages/Hotels";
// import AdminLayout from "./layouts/AdminLayout";
// import ProtectedRoute from "./routes/ProtectedRoute";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Rota de login */}
//         <Route path="/login" element={<Login />} />

//         {/* Rotas protegidas */}
//         <Route
//           path="/"
//           element={
//             <ProtectedRoute>
//               <AdminLayout />
//             </ProtectedRoute>
//           }
//         >
//           {/* Rotas internas do AdminLayout */}
//           <Route index element={<h1>Dashboard</h1>} />
//           <Route path="hotels" element={<Hotels />} />
//         </Route>

//         {/* Redireciona qualquer rota desconhecida para login */}
//         <Route path="*" element={<Navigate to="/login" replace />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


// Novo 27/03/2026

// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Login from "./pages/Login";
// import Hotels from "./pages/Hotels";
// import AdminLayout from "./layouts/AdminLayout";
// import ProtectedRoute from "./routes/ProtectedRoute";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Rota pública */}
//         <Route path="/login" element={<Login />} />

//         {/* Redireciona raiz para login */}
//         <Route path="/" element={<Navigate to="/login" replace />} />

//         {/* Rotas protegidas */}
//         <Route
//           path="/app"
//           element={
//             <ProtectedRoute>
//               <AdminLayout />
//             </ProtectedRoute>
//           }
//         >
//           {/* Dashboard */}
//           <Route index element={<h1>Dashboard</h1>} />

//           {/* Hotéis */}
//           <Route path="hotels" element={<Hotels />} />
//         </Route>

//         {/* Qualquer rota inválida */}
//         <Route path="*" element={<Navigate to="/login" replace />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import Hotels from "./pages/Hotels";
// import HotelForm from "./pages/HotelsForm";
// import Rooms from "./pages/Rooms";
// import AdminLayout from "./layouts/AdminLayout";
// import ProtectedRoute from "./routes/ProtectedRoute";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/login" element={<Login />} />

//         <Route path="/" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
//           <Route index element={<Dashboard />} />
//           <Route path="hotels" element={<Hotels />} />
//           <Route path="hotels/new" element={<HotelForm />} />
//           <Route path="rooms" element={<Rooms />} />
//         </Route>

//         <Route path="*" element={<Navigate to="/login" replace />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Hotels from "./pages/Hotels";
import HotelForm from "./pages/HotelsForm";
import Rooms from "./pages/Rooms";
import RoomsForm from "./pages/RoomsForm";
import AdminLayout from "./layouts/AdminLayout";
import ProtectedRoute from "./routes/ProtectedRoute";
import HotelPhotos from "./pages/HotelPhotos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Área protegida */}
        <Route
          path="/app"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="hotels" element={<Hotels />} />
          <Route path="hotels/new" element={<HotelForm />} />
          <Route path="hotels/edit/:id" element={<HotelForm />} />
          <Route path="hotels/:hotelId/rooms" element={<Rooms />} />
          <Route path="hotels/:hotelId/rooms/new" element={<RoomsForm />} />
          <Route path="rooms/edit/:id" element={<RoomsForm />} />
          <Route path="hotels/:hotelId/photos" element={<HotelPhotos />} />
          
        </Route>

        {/* Redirecionamento inteligente */}
        <Route
          path="*"
          element={
           // localStorage.getItem("auth")
           sessionStorage.getItem("auth")
              ? <Navigate to="/app" replace />
              : <Navigate to="/login" replace />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;