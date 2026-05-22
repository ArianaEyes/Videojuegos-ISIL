import FeaturesSection from "../game/FeaturesSection"
import Footer from "../game/Footer"
import Header from "../game/Header"
import Img from "../game/Img";
import Generos from "../Generos/Generos";


const Game = () => {
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

export default Game
