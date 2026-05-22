import { useNavigate, useParams } from 'react-router-dom';
import { useVideojuegos } from './useVideojuegos';

const VideojuegosDetalles = () => {
    const { id } = useParams()
const { videojuegoActual, cargando, error } = useVideojuegos(id!)

if (cargando) return <p>Cargando...</p>
if (error) return <p>{error}</p>
  return (
    <div>
    <h1 className="text-white">{videojuegoActual?.nombre}</h1>
    <img src={videojuegoActual?.imagen_url} alt={videojuegoActual?.nombre} />
    <p>{videojuegoActual?.resena}</p>
  </div>
  )
}

export default VideojuegosDetalles
