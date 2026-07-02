import Footer from "../../common/Footer"
import Header from "../../components/Header"
import GenerosLista from "./GenerosLista"

const Generos = () => {
  return (
    <div>
      <Header imagen="img1.jpg" titulo="Género" parrafo="Dale un vistazo a los demás géneros!" />
      <GenerosLista/>
      <Footer/>
    </div>
  )
}

export default Generos
