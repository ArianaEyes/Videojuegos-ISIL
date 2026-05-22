import { useQuery } from '@tanstack/react-query'
import { fetchVideojuegosGenero } from '../../services/videojuegos.services'
import { useParams } from 'react-router-dom';

export const GenerosDetalle = () => {

    const { id } = useParams();
  const {
    data = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["videojuegos", id],
    queryFn: () => fetchVideojuegosGenero(id),
  });

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (error instanceof Error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      {data.map((juego) => (
        <div key={juego.id}>
          {juego.nombre}
        </div>
      ))}
    </div>
  );
};