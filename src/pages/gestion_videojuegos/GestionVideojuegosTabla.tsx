

import { tableStyles } from '../../utils/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useGestorVideojuegos } from './useGestorVideojuegos'

const GestionVideojuegos = () => {
    const { videojuegos,cargando, error, hasVideojuegos,
        insertVideojuego, actualizarVideojuego, eliminarJuego} = useGestorVideojuegos()

        const [mostrarModal, setMostrarModal] = useState<'insert' | 'update' | 'delete' | null>(null)
    
  return (
    <>
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
                                    onClick={() => eliminarJuego(juego.id)}
                                    >
                                  <FontAwesomeIcon icon={faEdit}/>                               
                                 </button>
                            </td>
                            <td className={tableStyles.td}>
                                <button
                                    className='cursor-pointer text-red-500 hover:text-red-800'
                                    onClick={() => eliminarJuego(juego.id)}
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
            onClick={vaciarFavorito}>
                Vaciar de favoritos
            </button>
            </div>
        )} 
    </>
  )
}

export default FavoritosTabla
