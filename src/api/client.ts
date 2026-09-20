import axios from "axios";

// Origem da API (sem /api/v1). Em desenvolvimento local: VITE_API_URL=http://localhost:8080
export const API_ORIGIN: string =
  import.meta.env.VITE_API_URL ?? "https://backend-hotels-api-91dq.onrender.com";

const opcoes = {
  withCredentials: true, // envia o cookie de sessão
  headers: { "X-Requested-With": "XMLHttpRequest" }, // exigido pela API em requisições que alteram dados
};

// Hotéis e quartos
export const api = axios.create({ baseURL: `${API_ORIGIN}/api/v1`, ...opcoes });

// Login, logout e usuário atual
export const authApi = axios.create({ baseURL: `${API_ORIGIN}/auth`, ...opcoes });

// Sessão expirada: volta para o login
api.interceptors.response.use(
  (res) => res,
  (erro) => {
    if (erro.response?.status === 401 && window.location.pathname !== "/login") {
      window.location.assign("/login");
    }
    return Promise.reject(erro);
  }
);
