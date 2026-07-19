export interface Videojuego {
  id: number;
  nombre: string;
  id_genero: number;
  desarrollador: string;
  plataforma: string;
  anio: string;
  duracion_horas: string;
  rating: string;
  imagen_url: string;
  resena: string;
  pros: string;
  contras: string;
}

export interface PaginacionInfo {
  total_registros: number;
  total_paginas: number;
  pagina_actual: number;
  limite_por_pag: number;
}

export interface VideojuegoResponse {
  paginacion: PaginacionInfo;
  datos: Videojuego[];
}