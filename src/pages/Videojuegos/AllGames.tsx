import { useState } from "react";
import { useVideojuegos } from "./useVideojuegos";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
 
const AllGames = () => {
    const {videojuegos, cargando,error, hasVideojuegos} = useVideojuegos()
    const [abierto, setAbierto] = useState(false)

    if (cargando) return (
        <div className="p-20 text-center space-y-4">
            <div className="inline-block w-8 h-8 border-4 border-slate-900 border-t-transparent rounded-full animate-spin" />
            <p className="text-slate-500 font-mono text-sm tracking-widest uppercase">Cargando géneros...</p>
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
                            <Link
                              key={itemVideojuegos.id}
                              to={`/allgames/${itemVideojuegos.id}`}
                              style={{ padding: '2.5rem 1.5rem' }}
                              className="w-[100%] rounded-lg flex flex-col items-center 
                              gap-2 hover:scale-[1.02] transition-transform">
                              <img src={itemVideojuegos.imagen_url} alt={itemVideojuegos.nombre} className="w-60 h-70 mb-4 rounded-md" />
                              <h3 className="text-white font-bold text-lg mb-2">Juegos {itemVideojuegos.nombre}</h3>
                            </Link>
                            ))} 

                        </div>
                    </div>
                )}
    </div>
    </>
    )
}

export default AllGames;