import axios from "axios";

export const api = axios.create({
  baseURL: "https://backend-hotels-api-91dq.onrender.com/api/v1"
});

