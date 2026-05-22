import FeaturesSection from "./FeaturesSection"
import Footer from "./Footer"
import Header from "./Header"
import Img from "./Img";
import Generos from "../Generos/Generos";


const Game = () => {
  return (
    <>
    <div className="w-[100%]">
      <Header/>
      <Img/>
    <FeaturesSection/>
    <Generos/>
    <Footer/>
    </div>
    
    </>
  )
}

export default Game
