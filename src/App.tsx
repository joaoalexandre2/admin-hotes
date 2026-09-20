import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Hotels from "./pages/Hotels";
import HotelForm from "./pages/HotelsForm";
import Rooms from "./pages/Rooms";
import RoomsForm from "./pages/RoomsForm";
import AdminLayout from "./layouts/AdminLayout";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* Área protegida: exige sessão válida na API */}
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
        </Route>

        {/* ProtectedRoute manda para o login se não houver sessão */}
        <Route path="*" element={<Navigate to="/app" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
