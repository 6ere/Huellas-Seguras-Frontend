import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export async function obtenerFotosPerros(cantidad) {
  const response = await axios.get(`${API_URL}/${cantidad}`);
  return response.data.message;
}
