import axios from "axios";

export const secret = process.env.NEXT_PUBLIC_JWT_SECRET;

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default api;
