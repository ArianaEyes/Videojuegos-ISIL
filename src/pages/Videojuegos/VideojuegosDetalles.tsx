import {  useParams } from 'react-router-dom';

import Header from '../../components/Header';
import { useVideojuegosId } from './useVideojuegosPorId';

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
                <p className="pt-10 text-xl w-[100%]" ><b className="font-bold">Descripción: </b> {videojuegoActual?.resena}</p>
                <p className="pt-10 text-xl w-[100%]" ><b className="font-bold">Desarrollador: </b> {videojuegoActual?.desarrollador}</p>

                <div className="grid grid-cols-2 md:grid-cols-2 gap-4 pt-4">
                  <p className="text-xl"><b className="font-bold">Plataforma: </b> {videojuegoActual?.plataforma}</p>
                  <p className="text-xl"><b className="font-bold">Duración de horas: </b> {videojuegoActual?.duracion_horas}</p>
                </div>
                
                  <p className="text-xl pt-2"><b className="font-bold">Pros: </b> {videojuegoActual?.pros}</p>
                  <p className="text-xl pt-4"><b className="font-bold">Contras: </b> {videojuegoActual?.contras}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4 pt-4">
                  <p className="text-xl"><b className="font-bold">Año de lanzamiento: </b> {videojuegoActual?.anio}</p>
                  <p className="text-2xl font-bold"><b className="font-bold">Rating: </b> {videojuegoActual?.rating}</p>
                </div>
              </div>
            </div>
      
      </div>
    </div>
    </div>
  )
}

export default VideojuegosDetalles
