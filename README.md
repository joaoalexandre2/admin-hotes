<div align="center">

# 🏨 Admin Hotels

### Painel administrativo para gerenciar hotéis e quartos

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![React Query](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)

**Frontend** · [Ver API (Spring Boot)](https://github.com/joaoalexandre2/backend-hotels-api)

</div>

---

## ✨ Funcionalidades

| | |
|---|---|
| 🏨 **Hotéis** | Listagem, busca, cadastro, edição e exclusão |
| 🛏️ **Quartos** | Listagem, cadastro e edição, com filtro por hotel |
| 📊 **Dashboard** | Painel inicial de acesso rápido |
| 🔒 **Rotas protegidas** | Áreas do painel só abrem após o login |

## 🧩 Como funciona

```mermaid
flowchart LR
    U([👤 Administrador]) --> F[⚛️ Admin Hotels<br/>React + React Query]
    F -- "Axios / REST" --> A[☕ backend-hotels-api<br/>Spring Boot]
    A --> D[(🗄️ Banco de dados)]
```

## 🚀 Começando

Requisitos: Node.js 20+.

```bash
git clone https://github.com/joaoalexandre2/admin-hotes.git
cd admin-hotes
npm install
npm run dev
```

A URL da API está em [`src/api/client.ts`](src/api/client.ts). Para usar uma API local, troque a `baseURL`.

> ⚠️ **Login de demonstração.** A tela de login valida credenciais no próprio navegador e não usa autenticação real da API. Serve para mostrar o fluxo de rotas protegidas, e não deve ser usada em produção.

## 📜 Scripts

| Comando | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Checagem de tipos + build de produção |
| `npm run preview` | Pré-visualiza o build |
| `npm run lint` | Roda o ESLint |

## 📁 Estrutura

```
src/
├── api/          # cliente Axios
├── components/   # HotelCard, RoomCard, Sidebar
├── hooks/        # React Query: hotéis, quartos, auth
├── layouts/      # AdminLayout
├── pages/        # Login, Dashboard, Hotels, Rooms e formulários
├── routes/       # ProtectedRoute
└── style/        # estilos por tela
```

## 🔗 Backend

A API está em [joaoalexandre2/backend-hotels-api](https://github.com/joaoalexandre2/backend-hotels-api).

---

<div align="center">
Feito por <a href="https://github.com/joaoalexandre2">João Alexandre</a>
</div>
