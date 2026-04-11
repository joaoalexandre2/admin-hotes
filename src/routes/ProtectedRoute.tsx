// import { Navigate } from "react-router-dom";

// export default function ProtectedRoute({ children }: any) {
//   //const isAuth = localStorage.getItem("auth");
//   const isAuth = sessionStorage.getItem("auth");

//   if (!isAuth) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// }

import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: any) {
  const isAuth = sessionStorage.getItem("auth") === "true";

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return children;
}