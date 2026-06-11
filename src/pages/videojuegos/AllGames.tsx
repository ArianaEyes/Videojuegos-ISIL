import { useState } from "react";
import { useVideojuegos } from "./useVideojuegos";
import { faChevronUp, faChevronDown, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faEye } from "@fortawesome/free-solid-svg-icons"
import Header from "../../components/Header";
import { agregarFavoritos } from "../../utils/functions";
import Footer from "../../common/Footer";
 
const AllGames = () => {
    const {videojuegos, cargando,error, hasVideojuegos} = useVideojuegos()
    const [abierto, setAbierto] = useState(false)

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
    
console.log(videojuegos.map(v => v.id));
    return (
    <>
    <Header imagen="img1.jpg" titulo="Todos los juegos" parrafo="Descubre cada videojuego. y sus detalles!" />
     <div className="bg-[#1a1a1a] p-8 font-sans justify-centers shadow-black">
            <button onClick={() => setAbierto(!abierto)}
                    className="flex w-full justify-between items-center  md:bg-transparent border
                     border-muted md:border-none p-3 md:p-0 rounded-md md:cursor-default shadow-sm md:shadow-none mb-4">
                    
                    <span className="hidden max-md:block">
                        <FontAwesomeIcon icon={abierto ? faChevronUp : faChevronDown} />
                    </span>
                </button>
            {!hasVideojuegos ? (
                    <div>No se encotraron datos de videojuegos</div>
                ) : (
                    <div className="block">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-[70%] "style={{ margin: '2.5rem auto' }}>

                        {videojuegos.map(itemVideojuegos => (
                            <div>
                            <figure
  key={itemVideojuegos.id}
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
    <Footer/>
    </>
    )
}

export default AllGames;