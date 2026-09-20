import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useSession } from "../hooks/useAuth";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const { data: usuario, isLoading } = useSession();

  if (isLoading) {
    return <p style={{ padding: 24 }}>Carregando...</p>;
  }

  if (!usuario) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
