import { useState } from "react";
import { useVideojuegoPaginado } from "./useVideojuegoPaginado";
import { faChevronUp, faChevronDown,faEye, faStar, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useSearchParams } from "react-router-dom";
import Header from "../../components/Header";
import { agregarFavoritos } from "../../utils/functions";
import Footer from "../../common/Footer";
 
const AllGames = () => {
    const {videojuegos, cargando,error, hasVideojuegos,isPlaceholderData} = useVideojuegoPaginado()
    const [abierto, setAbierto] = useState(false)
    const [juegoSeleccionado, setJuegoSeleccionado] = useState<any>(null)
    const [cantidad, setCantidad] = useState(1)

    const [searchParams,setSearchParams] = useSearchParams()
    const [busquedaLocal, setBusquedaLocal] = useState(searchParams.get("texto_buscar")||"")

    const manejarBusqueda = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(busquedaLocal.trim() != ''){
            searchParams.set('texto_buscar', busquedaLocal)
        }else{
            searchParams.delete("texto_buscar")
        }
        searchParams.delete("pagina")
        searchParams.delete("columna_orden")
        searchParams.delete("tipo_orden")
        setSearchParams(searchParams)

    }

    if (cargando) return (
        <div className="p-20 text-center space-y-4">
            <div className="inline-block w-8 h-8 border-4 border-slate-900 border-t-transparent rounded-full animate-spin" />
            <p className="text-slate-500 font-mono text-sm tracking-widest uppercase">Cargando videojuegos...</p>
        </div>
    )
    if (error) return (
        <div className="p-20 text-center space-y-4">
            <div className="inline-block w-8 h-8 border-4 border-slate-900 border-t-transparent rounded-full animate-spin" />
            <p className="text-slate-500 font-mono text-sm tracking-widest uppercase">{error}</p>
        </div>
    )
    
    return (
    <>
    <Header imagen="img9.jpg" titulo="Todos los juegos" parrafo="Descubre cada videojuego. y sus detalles!" />
     <div className="bg-[#1a1a1a] p-8 font-sans justify-centers shadow-black">
            <button onClick={() => setAbierto(!abierto)}
                    className="flex w-full justify-between items-center  md:bg-transparent border
                     border-muted md:border-none p-3 md:p-0 rounded-md md:cursor-default shadow-sm md:shadow-none mb-4">
                    
                    <span className="hidden max-md:block">
                        <FontAwesomeIcon icon={abierto ? faChevronUp : faChevronDown} />
                    </span>
                </button>
                <form
    onSubmit={manejarBusqueda}
    className="flex justify-center items-center gap-3 w-full my-6"
>
    <input
        type="text"
        placeholder="Buscar marca, país o fundador..."
        value={busquedaLocal}
        onChange={(e) => setBusquedaLocal(e.target.value)}
        className="
            w-full max-w-lg
            px-4 py-2.5
            bg-gray-900
            text-white
            placeholder:text-gray-400
            border border-gray-700
            rounded-lg
            outline-none
            transition-all duration-200
            focus:border-red-600
            focus:ring-2 focus:ring-red-600/40
        "
    />

    <button
        type="submit"
        className="
            px-6 py-2.5
            bg-red-600
            text-white
            font-medium
            rounded-lg
            transition-all duration-200
            hover:bg-red-700
            hover:shadow-[0_0_12px_rgba(220,38,38,0.5)]
            active:scale-95
        "
    >
        Buscar
    </button>
</form>
            <div className={`transition-opacity duration-200 ${isPlaceholderData ? 'opacity-50': 'opacity-100'}`}>
                {!hasVideojuegos ? (
                    <div className="text-red-800">No se encotraron datos de videojuegos</div>
                ) : (
                    <div className="block">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-[70%] "style={{ margin: '2.5rem auto' }}>

                        {videojuegos.map(itemVideojuegos => (
                            <div key={itemVideojuegos.id}>
                            <figure
                            className="group relative overflow-hidden rounded-md"
                            >
  <div className="w-full h-56 overflow-hidden rounded-md">
    <img
      src={itemVideojuegos.imagen_url}
      alt={itemVideojuegos.nombre}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
  </div>
   <div
                         className="absolute inset-0 bg-black/60
                             opacity-0 group-hover:opacity-100
                                transition-opacity duration-300
                                flex items-center justify-center gap-3"
                            >
                         <Link
                           to={`/allgames/${itemVideojuegos.id}`}
                            className={`flex pointer-events-auto
                                                    items-center cursor-pointer justify-center w-10 h-10 rounded-full bg-white text-slate-800 hover:bg-blue-500
                                                 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 shadow-lg focus:ring-2 focus:bg-blue-500`}>
                         
                            <FontAwesomeIcon icon={faEye} />
                         </Link>

                            <button
                              type="button"
                              onClick={() =>
                                agregarFavoritos(
                                  itemVideojuegos.id,
                                  itemVideojuegos.nombre,
                                  itemVideojuegos.rating,
                                  itemVideojuegos.plataforma
                                )
                              }
                                className={`flex pointer-events-auto
                                                    items-center cursor-pointer justify-center w-10 h-10 rounded-full bg-white text-slate-800 hover:bg-yellow-500
                                                 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 shadow-lg focus:ring-2 focus:bg-yellow-500`}>
                                                
                                    
                                      <FontAwesomeIcon icon={faStar} />
                                    </button>
                                  </div>

                                  
                                </figure>
                                <div className="mt-3 text-center">
                                    <h3 className="text-white font-bold text-lg">
                                      Juegos {itemVideojuegos.nombre}
                                    </h3>
                                  </div>
                                </div>
                            ))} 
                            
                        </div>
                    </div>
                )}
            </div>

    </div>
    <Footer/>

      {/* MODAL CON IMAGEN GRANDE Y 7+ DATOS */}
            {juegoSeleccionado && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl w-full max-w-3xl relative shadow-2xl p-8">
                        <button onClick={() => setJuegoSeleccionado(null)} className="absolute top-4 right-4 text-zinc-400 hover:text-black">
                            <FontAwesomeIcon icon={faTimes} size="lg" />
                        </button>
                        
                        <div className="flex flex-col md:flex-row gap-8">
                            {/* IMAGEN MÁS GRANDE */}
                            <div className="w-full md:w-1/2 bg-zinc-50 rounded-xl p-6 flex items-center justify-center">
                                <img src={juegoSeleccionado.imagen_url} alt={juegoSeleccionado.nombre} className="max-h-80 object-contain" />
                            </div>
                            
                            <div className="w-full md:w-1/2 space-y-4">
                                <h3 className="text-2xl font-black">{juegoSeleccionado.nombre}</h3>
                                <p className="text-[#C1FF00] font-bold text-3xl">{juegoSeleccionado.precio}</p>
                                
                                {/* LISTA DE 7+ DATOS */}
                                <ul className="text-sm text-zinc-600 space-y-2 border-t pt-4">
                                    <li><strong>Nombre:</strong> {juegoSeleccionado.nombre}</li>
                                    <li><strong>Resena:</strong> {juegoSeleccionado.resena}</li>
                                    <li><strong>Rating:</strong> {juegoSeleccionado.rating}</li>
                                    <li><strong>Plataforma:</strong> {juegoSeleccionado.plataforma}</li>
                                    <li><strong>Desarrollado por:</strong> {juegoSeleccionado.desarrollador}</li>
                                    <li><strong>Pros:</strong> {juegoSeleccionado.pros}</li>
                                    <li><strong>Contras:</strong> {juegoSeleccionado.contras}</li>
                                </ul>

                                <div className="flex items-center gap-4 pt-4">
                                    <div className="flex items-center border border-zinc-300 rounded-lg overflow-hidden">
                                        <button onClick={() => setCantidad(c => Math.max(1, c - 1))} className="px-4 py-2 hover:bg-zinc-100">-</button>
                                        <span className="px-4 font-bold">{cantidad}</span>
                                        <button onClick={() => setCantidad(c => Math.min(juegoSeleccionado.rating, c + 1))} className="px-4 py-2 hover:bg-zinc-100">+</button>
                                    </div>
                                    
                                    <button 
                                        onClick={() => {
                                            agregarFavoritos(
                                                juegoSeleccionado.id_componente, 
                                                juegoSeleccionado.nombre, 
                                                juegoSeleccionado.rating,
                                                juegoSeleccionado.plataforma
                                            );
                                            setJuegoSeleccionado(null);
                                        }}
                                        className="flex-1 py-2 bg-[#C1FF00] hover:bg-[#b0eb00] font-black uppercase text-xs rounded-lg transition-all"
                                    >
                                        Agregar como favorito
                                    </button>
                                </div>

                                
                            </div>
                        </div>
                    </div>
                </div>
            )}
    </>
    )
}

export default AllGames;