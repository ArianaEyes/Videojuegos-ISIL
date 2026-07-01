
import Header from '../../components/Header'
import GestionVideojuegos from './GestionVideojuegosTabla'

const Gestion = () => {
  return (
    <div>
      <Header imagen="img1.jpg" titulo="Favoritos" 
                parrafo="Tus videojuegos favoritos"/>
        <section>
            <div className='mx-auto '>
              <GestionVideojuegos />
            </div>
        </section>
    </div>
  )
}

export default Gestion
