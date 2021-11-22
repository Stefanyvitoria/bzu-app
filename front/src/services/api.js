import axios from "axios";

const api = axios.create({
  baseURL: "sga",
});

export default api;