import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchTodosLosJuegos, insertJuegos } from "../../services/videojuegos.services";


export const useGestorVideojuegos = () => {

  const queryClient = useQueryClient()
  const { data, isLoading, error } = useQuery({
    queryKey: ['videojuegos'],
    queryFn: ({ signal }) => fetchTodosLosJuegos(signal),
  });
  const insertVideojuego = useMutation({
    mutationFn :({nombre, id_genero, desarrollador, plataforma, resena, rating, pros, contras, imagen_url, duracion_horas, anio} : {nombre: string,id_genero:number, desarrollador:string, plataforma: string,
  anio:string,duracion_horas:string,rating:string, imagen_url: string,
  resena:string, pros:string, contras:string}) =>
     insertJuegos(nombre, id_genero, desarrollador, plataforma, resena, rating, pros, contras, imagen_url, duracion_horas, anio),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["videojuegos"]})
    },
  onError: (err) => console.error("Error en la insersión", err),
  })

  const actualizarVideojuego = useMutation({
    mutationFn :({id,nombre, id_genero, desarrollador, plataforma, resena, rating, pros, contras, imagen_url, duracion_horas, anio} : {id:number,nombre: string,id_genero:number, desarrollador:string, plataforma: string,
  anio:string,duracion_horas:string,rating:string, imagen_url: string,
  resena:string, pros:string, contras:string}) =>
     actualizarVideojuego(id,nombre, id_genero, desarrollador, plataforma, resena, rating, pros, contras, imagen_url, duracion_horas, anio),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["videojuegos"]})
    },
  onError: (err) => console.error("Error en la insersión", err),
  })

  const eliminarJuego = useMutation({
    mutationFn :({id}: {id:number}) =>
     eliminarJuego(id),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["videojuegos"]})
    },
  onError: (err) => console.error("Error en la insersión", err),
  })

  return {
    videojuegos: data ?? [],
    cargando: isLoading,
    error: error ? error.message : null,
    hasVideojuegos: (data?.length ?? 0) > 0,
    insertVideojuego:insertVideojuego,
    actualizarVideojuego:actualizarVideojuego,
     eliminarJuego:eliminarJuego,
  };
};