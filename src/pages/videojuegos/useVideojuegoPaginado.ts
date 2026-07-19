import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { fetchPaginacion } from "../../services/videojuegos.services";

export const useVideojuegoPaginado = () => {
  const [searchParams] = useSearchParams();
  const queryString = searchParams.toString();

  const { data, isLoading, error, isPlaceholderData } = useQuery({
    queryKey: ["videojuegos", queryString],
    queryFn: ({ signal }) => fetchPaginacion(queryString, signal),
    placeholderData: (previousData) => previousData,
  });
  const juegos = data?.datos || [];
  const infoPaginacion = data?.paginacion;
  return {
    videojuegos: juegos,
    paginacion: infoPaginacion,
    cargando: isLoading,
    error: error ? error.message : null,
    hasVideojuegos: juegos.length > 0,
    isPlaceholderData,
  };
};
