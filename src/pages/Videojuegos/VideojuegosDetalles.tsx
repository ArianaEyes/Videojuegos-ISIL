import {  useParams } from 'react-router-dom';
import {  useVideojuegosId } from './useVideojuegos';
import Header from '../game/Header';

const VideojuegosDetalles = () => {
    const { id } = useParams()
const { videojuegoActual, cargando, error } = useVideojuegosId(id!)

if (cargando) return <p>Cargando...</p>
if (error) return <p>{error}</p>
  return (

    <div>
    <Header imagen="img1.jpg" titulo="Videojuego" parrafo="Dale un vistazo a los demás videojuegos!"/>  
     <div className="bg-[#1a1a1a] p-8 font-sans justify-centers shadow-black w-screen">
        <div className=" w-[70%]" style={{ margin: '2.5rem auto' }}>

            <div className="rounded-lg flex flex-col pb-5">
              <h1 className="text-white">{videojuegoActual?.nombre}</h1>
            </div>

            <div className=" w-[100%] grid grid-cols-1 md:grid-cols-2 gap-4  flex-col text-white">
              <img className="w-[80%]  shadow-2xl rounded-lg" src={videojuegoActual?.imagen_url} alt={videojuegoActual?.nombre} />
              <div>
                <p className="pt-10 text-xl w-[100%]" ><p className="font-bold">Descripción: </p> {videojuegoActual?.resena}</p>
                <p className="pt-10 text-xl w-[100%]" ><p className="font-bold">Desarrollador: </p> {videojuegoActual?.desarrollador}</p>

                <div className="grid grid-cols-2 md:grid-cols-2 gap-4 pt-4">
                  <p className="text-xl"><p className="font-bold">Plataforma: </p> {videojuegoActual?.plataforma}</p>
                  <p className="text-xl"><p className="font-bold">Duración de horas: </p> {videojuegoActual?.duracion_horas}</p>
                </div>
                
                  <p className="text-xl pt-2"><p className="font-bold">Pros: </p> {videojuegoActual?.pros}</p>
                  <p className="text-xl pt-4"><p className="font-bold">Contras: </p> {videojuegoActual?.contras}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4 pt-4">
                  <p className="text-xl"><p className="font-bold">Año de lanzamiento: </p> {videojuegoActual?.anio}</p>
                  <p className="text-2xl font-bold"><p className="font-bold">Rating: </p> {videojuegoActual?.rating}</p>
                </div>
              </div>
            </div>
      
      </div>
    </div>
    </div>
  )
}

export default VideojuegosDetalles
