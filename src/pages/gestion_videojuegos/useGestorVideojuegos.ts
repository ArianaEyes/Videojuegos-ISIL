import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  fetchTodosLosJuegos,
  insertJuegos,
  updateVideojuego,
  deleteVideojuego,
} from "../../services/videojuegos.services";

export const useGestorVideojuegos = () => {
  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery({
    queryKey: ["videojuegos"],
    queryFn: ({ signal }) => fetchTodosLosJuegos(signal),
  });
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
    videojuegos: data ?? [],
    cargando: isLoading,
    error: error ? error.message : null,
    hasVideojuegos: (data?.length ?? 0) > 0,

    insertVideojuego: insertMutation.mutateAsync,
    updateVideojuego: updateMutation.mutateAsync,
    deleteVideojuego: deleteMutation.mutateAsync,
  };
};
