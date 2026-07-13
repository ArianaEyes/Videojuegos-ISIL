import Footer from "../../common/Footer";
import FeaturesSection from "../../components/FeaturesSection"
import Header from "../../components/Header"
import Img from "../../components/Img";
import GenerosLista from "../generos/GenerosLista";


const Home = () => {
  return (
    <>
    <div className="w-[100%]">
      <Header imagen="img7.jpg" titulo="Play with us" parrafo="La mejor página para saber que jugar!"/>
      <Img/>
    <FeaturesSection/>
    <GenerosLista/>
    <Footer/>
    </div>
    
    </>
  )
}

export default Home
