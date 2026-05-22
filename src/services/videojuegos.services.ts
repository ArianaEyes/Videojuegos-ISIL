import { CONFIG } from "../config";
import type { Videojuego } from "../types/videojuegos";

const API_URL = `${CONFIG.API_URL}${CONFIG.ENDPOINTS.VIDEOJUEGOS}`;
export const fetchVideojuegosGenero = async (
  id_genero?: number | string,
  signal?: AbortSignal,
): Promise<Videojuego[]> => {
  const url = new URL(API_URL);
  if (id_genero) {
    url.searchParams.append("id_genero", id_genero.toString());
  }
  const response = await fetch(url.toString(), { signal });
  if (!response.ok) {
    throw new Error(
      `Error al obtener videojuegos: ${response.status} ${response.statusText}`,
    );
  }
  return response.json();
};
export const fetchVideojuegoDetalle = async (
  id?: number | string,
  signal?: AbortSignal,
): Promise<Videojuego[]> => {
  const url = new URL(API_URL);
  if (id) {
    url.searchParams.append("id", id.toString());
  }
  const response = await fetch(url.toString(), { signal });
  if (!response.ok) {
    throw new Error(
      `Error al obtener el videojuego: ${response.status} ${response.statusText}`,
    );
  }
  return response.json();
};
