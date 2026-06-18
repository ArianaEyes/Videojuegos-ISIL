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
export const insertJuegos = async (nombre: string,id_genero:number, desarrollador:string, plataforma: string,
  anio:string,duracion_horas:string,rating:string, imagen_url: string,
  resena:string, pros:string, contras:string) => {
    const formData = new FormData()
    formData.append("nombre", nombre)
    formData.append("id_genero", id_genero.toString())
    formData.append("desarrollador", desarrollador)
    formData.append("plataforma", plataforma)
    formData.append("anio", anio)
    formData.append("duracion_horas", duracion_horas)
    formData.append("rating",rating)
    formData.append("imagen_url", imagen_url)
    formData.append("resena",resena)
    formData.append("pros", pros)
    formData.append("contras", contras)

    const response = await fetch(API_URL, {
    method: "POST",
    body: formData
});
    if(!response.ok) throw new Error("Error al añadir videojuego")
      return response.text
    
  } 

export const eliminarJuego = async (id) => {
    const formData = new FormData()
    formData.append("id", id)
    

    const response = await fetch(API_URL, {
    method: "POST",
    body: formData
});
    if(!response.ok) throw new Error("Error al eliminar videojuego")
      return response.text
    
  }

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
