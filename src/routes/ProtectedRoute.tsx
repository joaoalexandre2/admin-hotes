// import { Navigate } from "react-router-dom";

// export default function ProtectedRoute({ children }: any) {
//   //const isAuth = localStorage.getItem("auth");
//   const isAuth = sessionStorage.getItem("auth");

//   if (!isAuth) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// }

// import { Navigate } from "react-router-dom";

// export default function ProtectedRoute({ children }: any) {
//   const isAuth = sessionStorage.getItem("auth") === "true";

//   if (!isAuth) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// }

// Novo 26/04/2026

import { Navigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

export default function ProtectedRoute({ children }: Props) {
  const token = sessionStorage.getItem("token");

  // 1. não existe token
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // 2. (opcional agora) validar expiração do JWT
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));

    const isExpired = payload.exp * 1000 < Date.now();

    if (isExpired) {
      sessionStorage.removeItem("token");
      return <Navigate to="/login" replace />;
    }
  } catch (err) {
    sessionStorage.removeItem("token");
    return <Navigate to="/login" replace />;
  }

  return children;
}