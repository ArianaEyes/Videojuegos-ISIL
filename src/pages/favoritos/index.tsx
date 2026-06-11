
import FavoritosTabla from './FavoritosTabla'
import Header from '../../components/Header'

const Favoritos = () => {
  return (
    <div>
      <Header imagen="img1.jpg" titulo="Favoritos" 
                parrafo="Tus videojuegos favoritos"/>
        <section>
            <div className='max-w-7xl mx-auto px-3 py-20'>
              <FavoritosTabla />
            </div>
        </section>
    </div>
  )
}

export default Favoritos
