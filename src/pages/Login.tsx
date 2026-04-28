

import { useState } from "react";
import { useNavigate } from "react-router-dom"; // <-- Import necessário
import { FaHotel } from "react-icons/fa";
import "../style/estiloLogin.css";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // <-- Hook do React Router

  const handleLogin = () => {
    if (user === "admin" && password === "123") {
      //localStorage.setItem("auth", "true"); // Marca como autenticado
      sessionStorage.setItem("auth", "true");
      navigate("/app");
    } else {
      alert("Credenciais inválidas");
    }
  };

  return (
    <div className="bg-animated-gradient min-h-screen w-screen flex items-center justify-center">
      <div className="glass-card">
        <h1 className="title-gradient flex items-center justify-center">
          <FaHotel className="mr-2 text-white" />
          Hotels
        </h1>
        <p className="footer-text mb-6">Faça login para acessar o painel administrativo</p>

        <input
          type="text"
          placeholder="Digite seu usuário"
          className="input-style mb-4"
          onChange={(e) => setUser(e.target.value)}
        />

        <input
          type="password"
          placeholder="Digite sua senha"
          className="input-style mb-6"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="button-style mb-4" onClick={handleLogin}>
          Entrar
        </button>

        <p className="footer-text">© 2026 Admin Hotels. Todos os direitos reservados.</p>
      </div>
    </div>
  );
}



// Novo 26/04/2026

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaHotel } from "react-icons/fa";
// import { api } from "../api/client";
// import "../style/estiloLogin.css";

// type LoginResponse = {
//   token: string;
// };

// export default function Login() {
//   const [user, setUser] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     if (!user || !password) {
//       alert("Preencha todos os campos");
//       return;
//     }

//     try {
//       setLoading(true);

//       const response = await api.post<LoginResponse>("/auth/login", {
//         username: user,
//         password: password,
//       });

//       const token = response.data.token;

//       if (!token) {
//         throw new Error("Token não recebido");
//       }

//       sessionStorage.setItem("token", token);

//       navigate("/app");

//     } catch (error: any) {
//       const message =
//         error?.response?.data?.message || "Usuário ou senha inválidos";

//       alert(message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-animated-gradient min-h-screen w-screen flex items-center justify-center">
//       <div className="glass-card">

//         <h1 className="title-gradient flex items-center justify-center">
//           <FaHotel className="mr-2 text-white" />
//           Hotels
//         </h1>

//         <p className="footer-text mb-6">
//           Faça login para acessar o painel administrativo
//         </p>

//         <input
//           type="text"
//           placeholder="Digite seu usuário"
//           className="input-style mb-4"
//           onChange={(e) => setUser(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Digite sua senha"
//           className="input-style mb-6"
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button
//           className="button-style mb-4"
//           onClick={handleLogin}
//           disabled={loading}
//         >
//           {loading ? "Entrando..." : "Entrar"}
//         </button>

//         <p className="footer-text">
//           © 2026 Admin Hotels. Todos os direitos reservados.
//         </p>

//       </div>
//     </div>
//   );
// }