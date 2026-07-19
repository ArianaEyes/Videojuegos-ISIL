
import Header from '../../components/Header'
import GestionVideojuegos from './GestionVideojuegosTabla'

const Gestion = () => {
  return (
    <div>
      <Header imagen="img1.jpg" titulo="Gestión" 
                parrafo="Añada juegos! Nuestros administradores verán si su juego puede ser añadido"/>
        <section>
            <div className='mx-auto '>
              <GestionVideojuegos />
            </div>
        </section>
    </div>
  )
}

export default Gestion
