import { CONFIG } from "../config";
import type { ResenaUsuario } from "../types/resenas_usuarios";

const API_URL = `${CONFIG.API_URL}${CONFIG.ENDPOINTS.RESENAS_USUARIOS}`;

export const fetchResenasUsuarios = async (
  signal?: AbortSignal,
): Promise<ResenaUsuario[]> => {
  const response = await fetch(API_URL, { signal });
  if (!response.ok) {
    throw new Error(
      `Error al obtener resenas: ${response.status} ${response.statusText}`,
    );
  }
  return response.json();
};
