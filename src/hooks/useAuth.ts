import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { authApi } from "../api/client";

const CHAVE_SESSAO = ["sessao"];

export interface Usuario {
  username: string;
}

/** Usuário logado (null se não houver sessão). A verdade vem da API, não do navegador. */
export function useSession() {
  return useQuery<Usuario | null>({
    queryKey: CHAVE_SESSAO,
    queryFn: async () => {
      try {
        const res = await authApi.get("/me");
        return res.data.user as Usuario;
      } catch {
        return null;
      }
    },
    retry: false,
    staleTime: 5 * 60 * 1000,
  });
}

export function useAuth() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  /** Retorna null em caso de sucesso, ou a mensagem de erro. */
  const login = async (username: string, password: string): Promise<string | null> => {
    try {
      const res = await authApi.post("/login", { username, password });
      queryClient.setQueryData(CHAVE_SESSAO, res.data.user as Usuario);
      navigate("/app", { replace: true });
      return null;
    } catch (erro: unknown) {
      const status = (erro as { response?: { status?: number } }).response?.status;
      if (status === 401) return "Usuário ou senha inválidos.";
      return "Não foi possível conectar à API. Tente novamente.";
    }
  };

  const logout = async () => {
    try {
      await authApi.post("/logout");
    } finally {
      queryClient.setQueryData(CHAVE_SESSAO, null);
      navigate("/login", { replace: true });
    }
  };

  return { login, logout };
}
