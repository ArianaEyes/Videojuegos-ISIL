import { useQuery } from "@tanstack/react-query";
import { fetchGeneros } from "../../services/generos.services";
import { useState } from "react";
import type { generos } from "../../types/genero";

export const useGeneros = () => {
  const [generoSeleccionado, setGeneroSeleccionado] = useState<generos | null>(
    null,
  );

  const { data, isLoading, error } = useQuery({
    queryKey: ["generos"],
    queryFn: ({ signal }) => fetchGeneros(signal),
  });

  const generos = Array.isArray(data) ? data : [];
  const hasGeneros = Array.isArray(data) && data.length > 0;
  const generoActual = generoSeleccionado || (hasGeneros ? generos[0] : null);

  return {
    generos,
    cargando: isLoading,
    error: error ? error.message : null,
    hasGeneros,
    seleccionarGenero: setGeneroSeleccionado,
    generoActual,
  };
};
