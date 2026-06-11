
import Footer from "../../common/Footer"
import Header from "../../components/Header"
import Img from "../../components/Img";
import Contactanos from "./contactanos";

const Contact = () => {
  return (
    <>
    <div className="w-[100%]">
      <Header imagen="i1.jpg" titulo="Contact Us" parrafo="Estás creando un juego? Contáctanos y lo añadiremos!"/>
      <Img/>
      
        <Contactanos/>
      

    <Footer/>
    </div>
    
    </>
  )
}

export default Contact
