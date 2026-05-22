import { useNavigate, useParams } from 'react-router-dom';
import { useVideojuegos } from './useVideojuegos';
import Header from '../game/Header';

const VideojuegosDetalles = () => {
    const { id } = useParams()
const { videojuegoActual, cargando, error } = useVideojuegos(id!)

if (cargando) return <p>Cargando...</p>
if (error) return <p>{error}</p>
  return (

    <div>
    <Header imagen="img1.jpg" titulo="Videojuego" parrafo="Dale un vistazo a los demás videojuegos!"/>  
     <div className="bg-[#1a1a1a] p-8 font-sans justify-centers shadow-black">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-[70%] "style={{ margin: '2.5rem auto' }}>
            <div className="w-[40%] rounded-lg flex flex-col">
              <h1 className="text-white">{videojuegoActual?.nombre}</h1>
              <img src={videojuegoActual?.imagen_url} alt={videojuegoActual?.nombre} />
            </div>
            <div className=" w-[100%] rounded-lg flex flex-col">
              <p>{videojuegoActual?.resena}</p>
            </div>
      
      </div>
    </div>
    </div>
  )
}

export default VideojuegosDetalles
