import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import type { Videojuego } from "../../types/videojuegos";
import { fetchVideojuegoById } from "../../services/videojuegos.services";

export const useVideojuegos = (id: string) => {
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
