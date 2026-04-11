// import { Link } from "react-router-dom";

// export default function Sidebar() {
//   return (
//     <aside className="w-64 bg-black text-white p-4">
//       <h1 className="text-xl font-bold mb-6">Admin</h1>

//       <nav className="flex flex-col gap-4">
//         <Link to="/">Dashboard</Link>
//         <Link to="/hotels">Hotéis</Link>
//         <Link to="/hotels/new">Novo Hotel</Link>
//         <Link to="/rooms">Rooms</Link>
//       </nav>
//     </aside>
//   );
// }

// src/components/Sidebar.tsx
// src/components/Sidebar.tsx
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { FaHotel, FaBed, FaHome, FaSignOutAlt } from "react-icons/fa";

// export default function Sidebar() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const isActive = (path: string) => {
//     return location.pathname === path;
//   };

//   const logout = () => {
//     sessionStorage.removeItem("auth");
//     navigate("/login");
//   };

//   return (
//     <aside className="w-64 bg-black text-white p-6 flex flex-col min-h-screen">
      
//       {/* Logo */}
//       <div className="flex items-center gap-2 mb-8">
//         <FaHotel size={22} />
//         <h1 className="text-xl font-bold">Admin Hotels</h1>
//       </div>

//       {/* Menu */}
//       <nav className="flex flex-col gap-2">

//         <Link
//           to="/app"
//           className={`flex items-center gap-2 p-2 rounded transition ${
//             isActive("/app")
//               ? "bg-gray-800"
//               : "hover:bg-gray-900"
//           }`}
//         >
//           <FaHome />
//           Dashboard
//         </Link>

//         <Link
//           to="/app/hotels"
//           className={`flex items-center gap-2 p-2 rounded transition ${
//             isActive("/app/hotels")
//               ? "bg-gray-800"
//               : "hover:bg-gray-900"
//           }`}
//         >
//           <FaHotel />
//           Hotéis
//         </Link>

//         <Link
//           to="/app/rooms"
//           className={`flex items-center gap-2 p-2 rounded transition ${
//             isActive("/app/rooms")
//               ? "bg-gray-800"
//               : "hover:bg-gray-900"
//           }`}
//         >
//           <FaBed />
//           Quartos
//         </Link>
//       </nav>

//       {/* Logout */}
//       <button
//         onClick={logout}
//         className="mt-auto flex items-center gap-2 bg-red-500 px-3 py-2 rounded hover:bg-red-600 transition"
//       >
//         <FaSignOutAlt />
//         Logout
//       </button>
//     </aside>
//   );
// }

// // src/components/Sidebar.tsx
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { FaHotel, FaBed, FaHome, FaSignOutAlt } from "react-icons/fa";

// export default function Sidebar() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const isActive = (path: string) => {
//     return location.pathname.startsWith(path);
//   };

//   const logout = () => {
//     sessionStorage.removeItem("auth");
//     navigate("/login");
//   };

//   return (
//     <aside className="w-64 bg-gradient-to-b from-gray-900 to-black text-white p-6 flex flex-col min-h-screen shadow-xl">
      
//       {/* Logo */}
//       <div className="flex items-center gap-3 mb-10">
//         <div className="bg-blue-500 p-2 rounded-xl">
//           <FaHotel size={18} />
//         </div>
//         <h1 className="text-xl font-bold tracking-wide">Admin Hotels</h1>
//       </div>

//       {/* Menu */}
//       <nav className="flex flex-col gap-2">

//         <Link
//           to="/app"
//           className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
//             isActive("/app") && location.pathname === "/app"
//               ? "bg-blue-500 text-white shadow"
//               : "hover:bg-gray-800 text-gray-300"
//           }`}
//         >
//           <FaHome />
//           Dashboard
//         </Link>

//         <Link
//           to="/app/hotels"
//           className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
//             isActive("/app/hotels")
//               ? "bg-blue-500 text-white shadow"
//               : "hover:bg-gray-800 text-gray-300"
//           }`}
//         >
//           <FaHotel />
//           Hotéis
//         </Link>

//         <Link
//           to="/app/rooms"
//           className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
//             isActive("/app/rooms")
//               ? "bg-blue-500 text-white shadow"
//               : "hover:bg-gray-800 text-gray-300"
//           }`}
//         >
//           <FaBed />
//           Quartos
//         </Link>
//       </nav>

//       {/* Divider */}
//       <div className="border-t border-gray-700 my-6"></div>

//       {/* Logout */}
//       <button
//         onClick={logout}
//         className="mt-auto flex items-center justify-center gap-2 bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition-all shadow"
//       >
//         <FaSignOutAlt />
//         Sair
//       </button>
//     </aside>
//   );
// }

// import { NavLink } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";
// import "../style/admin.css";

// export default function Sidebar() {
//   const { logout } = useAuth();

//   return (
//     <aside className="sidebar">
//       <h1>🏨 Admin Hotels</h1>

//       <nav className="nav">
//         <NavLink to="/" end>
//           Dashboard
//         </NavLink>

//         <NavLink to="/hotels">
//           Hotéis
//         </NavLink>

//         <NavLink to="/rooms">
//           Quartos
//         </NavLink>
//       </nav>

//       <button className="logout" onClick={logout}>
//         Sair
//       </button>
//     </aside>
//   );
// }

import { NavLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import "../style/admin.css";

export default function Sidebar() {
  const { logout } = useAuth();

  return (
    <aside className="sidebar">
      <h1>🏨 Admin Hotels</h1>

      <nav className="nav">
        <NavLink to="/app" end>
          Dashboard
        </NavLink>

        <NavLink to="/app/hotels">
          Hotéis
        </NavLink>

        <NavLink to="/app/rooms">
          Quartos
        </NavLink>
      </nav>

      <button className="logout" onClick={logout}>
        Sair
      </button>
    </aside>
  );
}