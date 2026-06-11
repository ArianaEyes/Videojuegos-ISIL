import { useQuery } from '@tanstack/react-query'
import { fetchVideojuegosGenero } from '../../services/videojuegos.services'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Header from '../../components/Header';
 const GenerosDetalle = () => {

    const { id } = useParams();
  const {data = [], isLoading, error} = useQuery({
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
  <Header imagen="img1.jpg" titulo="Género" parrafo="Dale un vistazo a los demás géneros!"/>
  <div className="bg-[#1a1a1a] p-8 font-sans shadow-black">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-[70%]" style={{ margin: '2.5rem auto' }}>
      {data.map((juego) => (
        <Link
          to={`/generos/${id}/videojuegos/${juego.id}`}
          key={juego.id}
          style={{ padding: '2.5rem 1.5rem' }}
          className="w-[100%] rounded-lg flex flex-col items-center gap-2 hover:scale-[1.02] transition-transform no-underline"
        >
          <img src={juego.imagen_url} alt={juego.nombre} className="w-[55%] mb-4 shadow-2xl rounded-lg" />
          <h1 className="text-white font-bold text-lg mb-2">{juego.nombre}</h1>
          <p className="text-gray-400 text-md leading-relaxed">{juego.resena}</p>
        </Link>
      ))}
    </div>
  </div>
</div>
  );
};
export default GenerosDetalle