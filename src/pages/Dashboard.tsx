// // src/pages/Dashboard.tsx
// export default function Dashboard() {
//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
//       <p>Bem-vindo ao painel de administração!</p>
//     </div>
//   );
// }

export default function Dashboard() {
  return (
    <div>
      <div className="header">
        <h2>Painel Administrativo</h2>
        <p>Gerencie hotéis e quartos</p>
      </div>

      <div className="grid">
        <div className="card">
          <h3>Hotéis</h3>
          <p>Gerencie todos os hotéis cadastrados</p>
        </div>

        <div className="card">
          <h3>Quartos</h3>
          <p>Controle disponibilidade e preços</p>
        </div>
      </div>
    </div>
  );
}