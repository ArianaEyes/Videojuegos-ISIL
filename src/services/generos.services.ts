import { CONFIG } from "../config";
import type { generos } from "../types/genero";
const API_URL = `${CONFIG.API_URL}${CONFIG.ENDPOINTS.GENEROS}`;

export const fetchGeneros = async (
  signal?: AbortSignal,
): Promise<generos[]> => {
  const response = await fetch(API_URL, { signal });
  if (!response.ok) {
    throw new Error(
      `Error al obtener generos: ${response.status} ${response.statusText}`,
    );
  }
  return response.json();
};
