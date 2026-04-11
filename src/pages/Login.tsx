// import { useState } from "react";
// import "../style/estiloLogin.css";

// export default function Login() {
//   const [user, setUser] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = () => {
//     if (user === "admin" && password === "123") {
//       localStorage.setItem("auth", "true");
//       window.location.href = "/";
//     } else {
//       alert("Credenciais inválidas");
//     }
//   };

//   return (
//     <div className="bg-animated-gradient min-h-screen w-screen flex items-center justify-center">
//       <div className="glass-card">
//         <h1 className="title-gradient">Hotels</h1>
//         <p className="footer-text mb-6">Faça login para acessar o painel administrativo</p>

//         {/* <label className="footer-text block mb-1">Usuário</label> */}
//         <input
//           type="text"
//           placeholder="Digite seu usuário"
//           className="input-style mb-4"
//           onChange={(e) => setUser(e.target.value)}
//         />



//         {/* <label className="footer-text block mb-1">Senha</label> */}
//         <input
//           type="password"
//           placeholder="Digite sua senha"
//           className="input-style mb-6"
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button className="button-style mb-4" onClick={handleLogin}>
//           Entrar
//         </button>

//         <p className="footer-text">© 2026 Admin Hotels. Todos os direitos reservados.</p>
//       </div>
//     </div>
//   );
// }

// Novo

// import { useState } from "react";
// import { FaHotel } from "react-icons/fa"; // Ícone de hotel do Font Awesome
// import "../style/estiloLogin.css";

// export default function Login() {
//   const [user, setUser] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = () => {
//     if (user === "admin" && password === "123") {
//       localStorage.setItem("auth", "true");
//       window.location.href = "/";
//     } else {
//       alert("Credenciais inválidas");
//     }
//   };

//   return (
//     <div className="bg-animated-gradient min-h-screen w-screen flex items-center justify-center">
//       <div className="glass-card">
//         <h1 className="title-gradient flex items-center justify-center">
//           <FaHotel className="mr-2 text-white" /> {/* ícone branco */}
//           Hotels
//         </h1>
//         <p className="footer-text mb-6">Faça login para acessar o painel administrativo</p>

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

//         <button className="button-style mb-4" onClick={handleLogin}>
//           Entrar
//         </button>

//         <p className="footer-text">© 2026 Admin Hotels. Todos os direitos reservados.</p>
//       </div>
//     </div>
//   );
// }

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