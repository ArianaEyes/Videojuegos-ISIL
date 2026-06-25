

import { tableStyles } from '../../utils/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useGestorVideojuegos } from './useGestorVideojuegos'

const GestionVideojuegos = () => {
    const { videojuegos,cargando, error, hasVideojuegos,
        insertVideojuego, updateVideojuego, deleteVideojuego} = useGestorVideojuegos()

    const [mostrarModal, setMostrarModal] =
        useState<{tipo:'insert' | 'update' | 'delete' | null}>({tipo : null})

    const [idjuego, setIdjuego] = useState("")

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
    
    const cerrarModal = () =>{
        setMostrarModal({tipo:null})
        setIdjuego("")
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

    const handleInsert = async (e) =>{
        e.preventDefault()
        try{
            await insertVideojuego({nombre,id_genero, desarrollador, plataforma, resena, rating, pros,contras,imagen_url,duracion_horas,anio})
        }catch(error){
            console.log(error)
        }
    }
    const handleUpdate = () =>{
        
    }
    const handleDelete = () =>{
        
    }
    if(cargando) return(
        <div>Cargando videojuegos...</div>
    )

     if (error)
    return (<div>Ocurrió un error</div>)
  
  return (
    <>
    <div className="bg-black min-h-screen p-6 font-sans">
            <div className="max-w-6xl mx-auto">
    <button 
        className="cursor-pointer bg-transparent border border-[#C1FF00] text-[#C1FF00] hover:bg-[#C1FF00] hover:text-black font-mono font-bold py-2 px-6 rounded 
        shadow-[0_0_10px_rgba(193,255,0,0.1)] hover:shadow-[0_0_20px_rgba(193,255,0,0.4)] transition-all duration-300 mb-8 tracking-wide"
        onClick={() => setMostrarModal({tipo: 'insert'})}
                >
                    [+] REGISTRAR HARDWARE
                </button>
    
     {!hasVideojuegos ? (
            <div>Favoritos está vacío</div>
        ) : (
            <div>
            <div className={tableStyles.container}>
            <table className={tableStyles.table}>
                <thead className={tableStyles.thead}>
                    <tr className={tableStyles.tr}>
                        <th className={tableStyles.th}>Código</th>
                        <th className={tableStyles.th}>Nombre</th>
                        <th className={tableStyles.th}>Rating</th>
                        <th className={tableStyles.th}>Plataforma</th>
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
                                    
                                    >
                                  <FontAwesomeIcon icon={faEdit}/>                               
                                 </button>
                            </td>
                            <td className={tableStyles.td}>
                                <button
                                    className='cursor-pointer text-red-500 hover:text-red-800'
                                    
                                    >
                                  <FontAwesomeIcon icon={faTrash}/>                             
                                 </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            
            </div>

            <button className='mt-6 text-ms text-red-500 hover:text-red-700 cursor-pointer'
            >
                Vaciar de favoritos
            </button>
            </div>
        )} 
        {mostrarModal.tipo && (
             <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex justify-center items-center z-50 p-4">
                        <div className="bg-[#0e0e0e] border border-[#C1FF00]/30 p-8 rounded-xl shadow-[0_0_30px_rgba(193,255,0,0.1)] w-full max-w-md relative overflow-hidden">
               
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C1FF00] to-transparent opacity-50"></div>
                            
                            <h3 className="text-[#C1FF00] font-mono text-xl font-bold mb-6 border-b border-white/10 pb-3 uppercase tracking-widest">
                                {mostrarModal.tipo === 'insert' && 'Nuevo juego'}
                                {mostrarModal.tipo === 'update' && 'Actualizar juego'}
                                {mostrarModal.tipo === 'delete' && 'Eliminar juego'}
                            </h3>
                            {mostrarModal.tipo === 'delete'
                            ? <form>
                                
                                <div className="flex justify-end gap-4 mt-6 border-t border-white/5 pt-4">
                                <button 
                                    className="cursor-pointer bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-mono text-sm py-2 px-4 rounded transition-colors"
                                    onClick={() => setMostrarModal({ tipo: null })}
                                >
                                    Cancelar
                                </button>
                                <button 
                                    className="cursor-pointer bg-[#C1FF00] hover:bg-[#a5db00] text-black font-mono font-bold text-sm py-2 px-4 rounded transition-colors shadow-[0_0_10px_rgba(193,255,0,0.2)]"
                                    onClick={() => {
                            
                                    console.log('Guardando director...');
                                    setMostrarModal({ tipo: null });
                                }}
                                >
                                    Eliminar Juego
                                </button>
                            </div>
                            </form> :

                            <form onSubmit={mostrarModal.tipo === "insert"? handleInsert : handleUpdate}>
                                <div className="space-y-4 mb-8">
                                <input type="text"
                                className="w-full px-3 py-2 border border-slate-400 text-white"
                                placeholder="Nombre"
                                value={nombre}
                                onChange={(event) => setNombre(event.target.value)}>
                                </input>
                                </div>

                                <div className="flex justify-end gap-4 mt-6 border-t border-white/5 pt-4">
                                <button 
                                    className="cursor-pointer bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-mono text-sm py-2 px-4 rounded transition-colors"
                                    onClick={() => setMostrarModal({ tipo: null })}
                                >
                                    Cancelar
                                </button>
                                <button 
                                    className="cursor-pointer bg-[#C1FF00] hover:bg-[#a5db00] text-black font-mono font-bold text-sm py-2 px-4 rounded transition-colors shadow-[0_0_10px_rgba(193,255,0,0.2)]"
                                    onClick={() => {
                            
                                    console.log('Guardando director...')
                                    setMostrarModal({ tipo: null })}}
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
    </>
  )
}

export default GestionVideojuegos
