
import useFavorito from './useFavorito'
import { tableStyles } from '../../utils/styles'

const FavoritosTabla = () => {
    const { listaItems,  hasListaItems,quitarFavorito } = useFavorito()
  return (
    <>
     {!hasListaItems ? (
            <div>Favoritos está vacío</div>
        ) : (
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
                    {listaItems.map(itemFavorito => (
                        <tr key={itemFavorito.idjuego}  className={tableStyles.tr}>
                            <td className={tableStyles.td}>{itemFavorito.idjuego}</td>
                            <td className={tableStyles.td}>{itemFavorito.nombre}</td>
                            <td className={tableStyles.td}>{itemFavorito.rating}</td>
                            <td className={tableStyles.td}>{itemFavorito.plataforma}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className='mt-6 text-ms text-red-500 hover:text-red-700 cursor-pointer'
            onClick={quitarFavorito}>
                Quitar de favoritos
            </button>
            </div>
        )} 
    </>
  )
}

export default FavoritosTabla
