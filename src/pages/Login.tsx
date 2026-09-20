import { useState } from "react";
import type { FormEvent } from "react";
import { FaHotel } from "react-icons/fa";
import { useAuth } from "../hooks/useAuth";
import "../style/estiloLogin.css";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [erro, setErro] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);
  const { login } = useAuth();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setErro(null);
    setEnviando(true);
    const mensagem = await login(user, password);
    if (mensagem) {
      setErro(mensagem);
      setEnviando(false);
    }
  };

  return (
    <div className="bg-animated-gradient min-h-screen w-screen flex items-center justify-center">
      <form className="glass-card" onSubmit={handleLogin}>
        <h1 className="title-gradient flex items-center justify-center">
          <FaHotel className="mr-2 text-white" />
          Hotels
        </h1>
        <p className="footer-text mb-6">Faça login para acessar o painel administrativo</p>

        <input
          type="text"
          placeholder="Digite seu usuário"
          className="input-style mb-4"
          autoComplete="username"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />

        <input
          type="password"
          placeholder="Digite sua senha"
          className="input-style mb-6"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {erro && (
          <p role="alert" className="mb-4" style={{ color: "#fecaca" }}>
            {erro}
          </p>
        )}

        <button type="submit" className="button-style mb-4" disabled={enviando}>
          {enviando ? "Entrando..." : "Entrar"}
        </button>

        <p className="footer-text">© 2026 Admin Hotels. Todos os direitos reservados.</p>
      </form>
    </div>
  );
}
