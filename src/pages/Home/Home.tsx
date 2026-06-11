import FeaturesSection from "../../components/FeaturesSection"
import Footer from "../../common/Footer"
import Header from "../../components/Header"
import Img from "../../components/Img";
import Generos from "../generos/Generos";


const Home = () => {
  return (
    <>
    <div className="w-[100%]">
      <Header imagen="i1.jpg" titulo="Play with Us" parrafo="La mejor página para saber que jugar!"/>
      <Img/>
    <FeaturesSection/>
    <Generos/>
    <Footer/>
    </div>
    
    </>
  )
}

export default Home
