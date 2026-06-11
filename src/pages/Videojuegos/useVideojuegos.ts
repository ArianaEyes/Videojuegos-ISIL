import { useQuery } from "@tanstack/react-query";
import { fetchTodosLosJuegos } from "../../services/videojuegos.services";


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