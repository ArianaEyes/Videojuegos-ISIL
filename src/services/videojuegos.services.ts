import { CONFIG } from "../config";
import type { Videojuego } from "../types/videojuegos";

const API_URL = `${CONFIG.API_URL}${CONFIG.ENDPOINTS.VIDEOJUEGOS}`;

export const fetchVideojuegosGenero = async (
  id_genero?: number,
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

export const fetchTodosLosJuegos = async (
  signal?: AbortSignal,
): Promise<Videojuego[]> => {
  const response = await fetch(API_URL, { signal });
  if (!response.ok) {
    throw new Error(
      `Error al obtener videjuegos: ${response.status} ${response.statusText}`,
    );
  }
  return response.json();
};

// ── INSERT: el PHP lee JSON del body con json_decode(file_get_contents("php://input")) ──
export const insertJuegos = async (
  nombre: string,
  id_genero: number,
  desarrollador: string,
  plataforma: string,
  anio: string,
  duracion_horas: string,
  rating: string,
  imagen_url: string,
  resena: string,
  pros: string,
  contras: string,
) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nombre,
      id_genero,
      desarrollador,
      plataforma,
      anio,
      duracion_horas,
      rating,
      imagen_url,
      resena,
      pros,
      contras,
    }),
  });
  if (!response.ok) throw new Error("Error al añadir videojuego");
  return response.json();
};

// ── UPDATE: el PHP lee el id de $_GET['id'] (query string) y el resto de JSON body ──
export const updateVideojuego = async (
  id: number | string,
  nombre: string,
  id_genero: number,
  desarrollador: string,
  plataforma: string,
  anio: string,
  duracion_horas: string,
  rating: string,
  imagen_url: string,
  resena: string,
  pros: string,
  contras: string,
) => {
  const url = new URL(API_URL);
  url.searchParams.append("id", id.toString());

  const response = await fetch(url.toString(), {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nombre,
      id_genero,
      desarrollador,
      plataforma,
      anio,
      duracion_horas,
      rating,
      imagen_url,
      resena,
      pros,
      contras,
    }),
  });
  if (!response.ok) throw new Error("Error al actualizar videojuego");
  return response.json();
};

// ── DELETE: el PHP lee el id de $_GET['id'], sin body ──
export const deleteVideojuego = async (id: number | string) => {
  const url = new URL(API_URL);
  url.searchParams.append("id", id.toString());

  const response = await fetch(url.toString(), {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Error al eliminar videojuego");
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

export const fetchVideojuegoById = async (
  id: number | string,
  signal?: AbortSignal,
): Promise<Videojuego[]> => {
  const response = await fetch(`${API_URL}?id=${id}`, { signal });
  if (!response.ok) {
    throw new Error("Error al obtener videojuego");
  }
  return response.json();
};
