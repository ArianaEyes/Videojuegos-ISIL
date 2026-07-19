import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  fetchTodosLosJuegos,
  insertJuegos,
  updateVideojuego,
  deleteVideojuego,
  fetchPaginacion,
} from "../../services/videojuegos.services";
import { useSearchParams } from "react-router-dom";

export const useGestorVideojuegos = () => {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const queryString = searchParams.toString();

  const { data, isLoading, error, isPlaceholderData } = useQuery({
    queryKey: ["videojuegos", queryString],
    queryFn: ({ signal }) => fetchPaginacion(queryString, signal),
    placeholderData: (previousData) => previousData,
  });
  const juegos = data?.datos || [];
  const infoPaginacion = data?.paginacion;
  const insertMutation = useMutation({
    mutationFn: ({
      nombre,
      id_genero,
      desarrollador,
      plataforma,
      resena,
      rating,
      pros,
      contras,
      imagen_url,
      duracion_horas,
      anio,
    }: {
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
    }) =>
      insertJuegos(
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
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["videojuegos"] });
    },
    onError: (err) => console.error("Error en la insersión", err),
  });

  const updateMutation = useMutation({
    mutationFn: ({
      id,
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
    }: {
      id: number | string;
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
    }) =>
      updateVideojuego(
        id,
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
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["videojuegos"] });
    },
    onError: (err) => console.error("Error en la insersión", err),
  });

  const deleteMutation = useMutation({
    mutationFn: ({ id }: { id: number | string }) => deleteVideojuego(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["videojuegos"] });
    },
    onError: (err) => console.error("Error en la insersión", err),
  });

  return {
    videojuegos: juegos,
    cargando: isLoading,
    error: error ? error.message : null,
    hasVideojuegos: juegos.length > 0,
    paginacion: infoPaginacion,

    insertVideojuego: insertMutation.mutateAsync,
    updateVideojuego: updateMutation.mutateAsync,
    deleteVideojuego: deleteMutation.mutateAsync,
    isPlaceholderData,
  };
};
