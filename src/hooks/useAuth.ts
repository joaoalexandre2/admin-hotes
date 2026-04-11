// src/hooks/useAuth.ts
import { useNavigate } from "react-router-dom";

export function useAuth() {
  const navigate = useNavigate();

  const login = (username: string, password: string) => {
    if (username === "admin" && password === "123") {
      localStorage.setItem("auth", "true");
      navigate("/", { replace: true });
    } else {
      alert("Credenciais inválidas");
    }
  };

  const logout = () => {
    localStorage.removeItem("auth");
    navigate("/login", { replace: true });
  };

  const isAuthenticated = () => !!localStorage.getItem("auth");

  return { login, logout, isAuthenticated };
}