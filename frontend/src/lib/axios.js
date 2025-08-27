import axios from "axios";

// this was the first version, we just changed it at the end of the tutorial
// const BASE_URL =
//   import.meta.env.MODE === "development"
//     ? "http://localhost:5001/api"
//     : "https://slack-backend-lime.vercel.app/api";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
