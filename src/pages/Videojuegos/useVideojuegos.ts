import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import type { Videojuego } from "../../types/videojuegos";
import { fetchTodosLosJuegos, fetchVideojuegoById } from "../../services/videojuegos.services";

export const useVideojuegosId = (id: string) => {
  const [videojuego, setVideojuego] = useState<Videojuego | null>(null);

  const { data, isLoading, error } = useQuery({
    queryKey: ["videojuego", id],
    queryFn: ({ signal }) => fetchVideojuegoById(id, signal),
  });
  console.log({ id, data, isLoading, error });

  const videojuegoActual = videojuego || (Array.isArray(data) ? data[0] : data) || null;
  const hasVideojuego = !!data;

  return {
    videojuegoActual,
    cargando: isLoading,
    error: error ? error.message : null,
    hasVideojuego,
    seleccionarVideojuego: setVideojuego,
  };
};
export const useVideojuegos = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["videojuegos"],
    queryFn: ({ signal }) => fetchTodosLosJuegos(signal),
  });

  return {
    videojuegos: data ?? [],
    cargando: isLoading,
    error: error ? error.message : null,
    hasVideojuegos: (data?.length ?? 0) > 0,
  };
};