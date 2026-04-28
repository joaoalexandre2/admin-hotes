 import axios from "axios";

export const api = axios.create({
  baseURL: "http://2.24.200.141/api/v1"
});

// Novo 26/04/2026

// import axios from "axios";

// export const api = axios.create({
//   baseURL: "http://2.24.200.141/api/v1",
// });

// // =======================
// // REQUEST INTERCEPTOR
// // =======================
// api.interceptors.request.use((config) => {
//   const token = sessionStorage.getItem("token");

//   if (token) {
//     try {
//       const payload = JSON.parse(atob(token.split(".")[1]));

//       const isExpired = payload.exp * 1000 < Date.now();

//       if (isExpired) {
//         sessionStorage.removeItem("token");
//         window.location.href = "/login";
//         return config;
//       }
//     } catch (err) {
//       sessionStorage.removeItem("token");
//       window.location.href = "/login";
//       return config;
//     }

//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });

// // =======================
// // RESPONSE INTERCEPTOR
// // =======================
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       sessionStorage.removeItem("token");
//       window.location.href = "/login";
//     }

//     return Promise.reject(error);
//   }
// );