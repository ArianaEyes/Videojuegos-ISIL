import { tableStyles } from '../../utils/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useGestorVideojuegos } from './useGestorVideojuegos'
import { useSearchParams } from 'react-router-dom'
import Paginacion from './Paginacion'
import Footer from '../../common/Footer'

const GestionVideojuegos = () => {
    const { videojuegos,cargando, error, hasVideojuegos,paginacion,
        insertVideojuego, updateVideojuego, deleteVideojuego} = useGestorVideojuegos()
    const [parametros, setParametros] = useSearchParams()

    const manejarOrden = (columna: string) => {
    const nuevosParametros = new URLSearchParams(parametros);

    const ordenActual = nuevosParametros.get("ordenar_por");
    const tipoActual = nuevosParametros.get("direccion");

    let nuevoTipo = "ASC";
    if (ordenActual === columna && tipoActual === "ASC") {
        nuevoTipo = "DESC";
    }

    nuevosParametros.set("ordenar_por", columna);
    nuevosParametros.set("direccion", nuevoTipo);
    nuevosParametros.set('pagina', '1');
    setParametros(nuevosParametros)
    
};

    const [mostrarModal, setMostrarModal] =
        useState<{tipo:'insert' | 'update' | 'delete' | null}>({tipo : null})
    const [id, setId] = useState("")
    const [nombre, setNombre] = useState("")
    const [id_genero, setIdgenero] = useState(0)
    const [desarrollador, setDesarrollador] = useState("")
    const [plataforma, setPlataforma] = useState("")
    const [anio, setAnio] = useState("")
    const [duracion_horas, setDuracion] = useState("")
    const [rating, setRating] = useState("")
    const [imagen_url, setImagen_url] = useState("")
    const [resena, setResena] = useState("")
    const [pros, setPros] = useState("")
    const [contras, setContras] = useState("")
    
    const [searchParams,setSearchParams] = useSearchParams()
    const [busquedaLocal, setBusquedaLocal] = useState(searchParams.get("texto_buscar")||"")

    const manejarBusqueda = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nuevos = new URLSearchParams(searchParams);

    if (busquedaLocal.trim() !== "") {
        nuevos.set("texto_buscar", busquedaLocal);
    } else {
        nuevos.delete("texto_buscar");
    }

    nuevos.set("pagina", "1");

    setSearchParams(nuevos);
};

    const cerrarModal = () =>{
        setMostrarModal({tipo:null})
        setId("")
        setNombre("")
        setIdgenero(0)
        setDesarrollador("")
        setPlataforma("")
        setAnio("")
        setDuracion("")
        setImagen_url("")
        setResena("")
        setRating("")
        setPros("")
        setContras("")
    }

    const handleInsert = async (e: React.FormEvent<HTMLFormElement> ) =>{
        e.preventDefault()
        try{
            await insertVideojuego({nombre,id_genero, desarrollador, plataforma, resena, rating, pros,contras,imagen_url,duracion_horas,anio})
            cerrarModal()
        }catch(error){
            console.log(error)
        }
        console.log('Insertando videojuego...', {nombre});
        

    }
    const handleUpdate = async (e: React.FormEvent<HTMLFormElement> ) =>{
        e.preventDefault()
        try{
            await updateVideojuego({id,nombre,id_genero, desarrollador, plataforma, resena, rating, pros,contras,imagen_url,duracion_horas,anio})
            cerrarModal()
        }catch(error){
            console.log(error)
        }
        

    }
    const handleDelete = async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        try {
            await deleteVideojuego({id})
            cerrarModal()
        } catch (error) {
            console.log("Error al eliminar: ", error)
        }
    }
    if(cargando) return(
        <div>Cargando videojuegos...</div>
    )
     if (error)
    return (<div>Ocurrió un error</div>)

    
  
  return (
    <>
    <div className="w-full bg-zinc-900 p-8 font-sans justify-centers shadow-black ">
            <div className="max-w-6xl mx-auto">
    <button 
        className="cursor-pointer bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-mono font-bold py-2 px-6 rounded shadow-[0_0_10px_rgba(255,0,0,0.15)] hover:shadow-[0_0_20px_rgba(255,0,0,0.4)] transition-all duration-300 mb-8 tracking-wide"
        onClick={() => setMostrarModal({tipo: 'insert'})}
                >
                    [+] REGISTRAR VIDEOJUEGO
                </button>
                
    
     {!hasVideojuegos ? (
            <div>Favoritos está vacío</div>
        ) : (
            
            <div>
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
            <div className={tableStyles.container}>
            <table className={tableStyles.table}>
                <thead className={tableStyles.thead}>
                    <tr className={tableStyles.tr}>
                        <th className={tableStyles.th} onClick={() =>manejarOrden('id')}>Código</th>
                        <th className={tableStyles.th} onClick={() =>manejarOrden('nombre')}>Nombre</th>
                        <th className={tableStyles.th} onClick={() =>manejarOrden('rating')}>Rating</th>
                        <th className={tableStyles.th} onClick={() =>manejarOrden('plataforma')}>Plataforma</th>
                        <th className={tableStyles.th}></th>
                        <th className={tableStyles.th}></th>
                    </tr>
                </thead>
                <tbody className={tableStyles.tbody}>
                    {videojuegos.map(juego => (
                        <tr key={juego.id}  className={tableStyles.tr}>
                            <td className={tableStyles.td}>{juego.id}</td>
                            <td className={tableStyles.td}>{juego.nombre}</td>
                            <td className={tableStyles.td}>{juego.rating}</td>
                            <td className={tableStyles.td}>{juego.plataforma}</td>
                            <td className={tableStyles.td}>
                                <button
                                    className='cursor-pointer text-red-500 hover:text-red-800'
                                    onClick={() => {
                                            setId(juego.id.toString())
                                            setNombre(juego.nombre)
                                            setIdgenero(juego.id_genero)
                                            setDesarrollador(juego.desarrollador)
                                            setPlataforma(juego.plataforma)
                                            setResena(juego.resena)
                                            setRating(juego.rating)
                                            setPros(juego.pros)
                                            setContras(juego.contras)
                                            setDuracion(juego.duracion_horas)
                                            setAnio(juego.anio)
                                            setImagen_url(juego.imagen_url)
                                            setMostrarModal({ tipo: 'update' })
                                        }}
                                    >
                                  <FontAwesomeIcon icon={faEdit}/>                               
                                 </button>
                            </td>
                            <td className={tableStyles.td}>
                                <button
                                    className='cursor-pointer text-red-500 hover:text-red-800'
                                   onClick={() => {
                                            setId(juego.id.toString())
                                            setNombre(juego.nombre)
                                            setMostrarModal({ tipo: 'delete' })
                                        }}>
                                  <FontAwesomeIcon icon={faTrash}/>                             
                                 </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            
            </div>

            
            </div>
        )} 
        {paginacion && (
            <Paginacion
             paginaActual={paginacion.pagina_actual}
             totalPaginas={paginacion.total_paginas}
            />
        )}
        

        {mostrarModal.tipo && (
             <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex justify-center items-center z-50 p-4">
                        <div className="bg-[#0e0e0e] border border-[#ff0000]/30 p-9 m-auto rounded-xl shadow-[0_0_30px_rgba(255,0,0,0.1)] w-[43%] relative overflow-hidden">
            
                            <h3 className="text-[#ff0000] font-mono text-xl font-bold mb-6 border-b border-white/10 pb-3 uppercase tracking-widest">
                                {mostrarModal.tipo === 'insert' && 'Nuevo juego'}
                                {mostrarModal.tipo === 'update' && 'Actualizar juego'}
                                {mostrarModal.tipo === 'delete' && 'Eliminar juego'}
                            </h3>
                            {mostrarModal.tipo === 'delete'
                            ? <form onSubmit={handleDelete}>
                                
                                <div className="flex justify-end gap-4 mt-6 border-t border-white/5 pt-4">
                                <button 
                                    className="cursor-pointer bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-mono text-sm py-2 px-4 rounded transition-colors"
                                    onClick={cerrarModal}                               >
                                    Cancelar
                                </button>
                                <button 
                                type="submit"
                                    className="cursor-pointer bg-[#ff0000] hover:bg-[#ff0000] text-black font-mono font-bold text-sm py-2 px-4 rounded transition-colors shadow-[0_0_10px_rgba(193,255,0,0.2)]"
                                    onClick={() => {
                            
                                    console.log('Guardando director...');
                                    
                                }}
                                >
                                    Eliminar Juego
                                </button>
                            </div>
                            </form> :

                            <form onSubmit={mostrarModal.tipo === "insert"? handleInsert : handleUpdate}>
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                <input type="text"
                                className="w-full px-3 py-2 border border-slate-400 text-black"
                                placeholder="Nombre"
                                value={nombre}
                                onChange={(event) => setNombre(event.target.value)}>
                                </input>
                                <input type="text"
                               className="w-full px-3 py-2 border border-slate-400 text-black"
                                placeholder="Desarrollador"
                                value={desarrollador}
                                onChange={(event) => setDesarrollador(event.target.value)}>
                                </input>
                                <input
                                    type="number"
                                    className="w-full px-3 py-2 bg-white text-black"
                                    placeholder="ID Género"
                                    value={id_genero}
                                    onChange={(e)=>setIdgenero(Number(e.target.value))}
                                    />
                                <input type="text"
                               className="w-full px-3 py-2 border border-slate-400 text-black"
                                placeholder="Plataforma"
                                value={plataforma}
                                onChange={(event) => setPlataforma(event.target.value)}>
                                </input>
                                <input type="text"
                               className="w-full px-3 py-2 border border-slate-400 text-black"
                                placeholder="Resena"
                                value={resena}
                                onChange={(event) => setResena(event.target.value)}>
                                </input>
                                <input type="text"
                               className="w-full px-3 py-2 border border-slate-400 text-black"
                                placeholder="rating"
                                value={rating}
                                onChange={(event) => setRating(event.target.value)}>
                                </input>
                                <input type="text"
                               className="w-full px-3 py-2 border border-slate-400 text-black"
                                placeholder="pros"
                                value={pros}
                                onChange={(event) => setPros(event.target.value)}>
                                </input>
                                <input type="text"
                               className="w-full px-3 py-2 border border-slate-400 text-black"
                                placeholder="contras"
                                value={contras}
                                onChange={(event) => setContras(event.target.value)}>
                                </input>

                                <input type="text"
                               className="w-full px-3 py-2 border border-slate-400 text-black"
                                placeholder="Duracion"
                                value={duracion_horas}
                                onChange={(event) => setDuracion(event.target.value)}>
                                </input>
                                <input type="text"
                               className="w-full px-3 py-2 border border-slate-400 text-black"
                                placeholder="Año"
                                value={anio}
                                onChange={(event) => setAnio(event.target.value)}>
                                </input>
                                </div>

                                <div className="flex justify-end gap-4 mt-6 border-t border-white/5 pt-4">
                                <button 
                                    className="cursor-pointer bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-mono text-sm py-2 px-4 rounded transition-colors"
                                    onClick={cerrarModal}
                                >
                                    Cancelar
                                </button>
                                <button 
                                type='submit'
                                    className="cursor-pointer bg-[#ff0000] hover:bg-[#ff0000] text-black font-mono font-bold text-sm py-2 px-4 rounded transition-colors shadow-[0_0_10px_rgba(255,0,0,0.2)]"

                                >
                                    Guardar Juego
                                </button>
                                
                            </div>
                            
                            </form>
                            }
                            
                        </div>
                    </div>
        )}
        </div>
        
     
    </div>
    <Footer/>
    
    </>
  )
}

export default GestionVideojuegos
