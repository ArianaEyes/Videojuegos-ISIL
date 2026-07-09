
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link,  NavLink, type NavLinkRenderProps } from "react-router-dom"
import { useAuth } from "../context/AuthContext" 
type HeaderProps = {
  imagen: string
  titulo: string
  parrafo: string
}
  const { isAuthenticated, logout} = useAuth()

const Header = ({ imagen, titulo, parrafo }: HeaderProps) => {
  const navLinkStyles = ({ isActive }: NavLinkRenderProps): string => {
    return `block px-3 py-3 text-sm hover:bg-accent hover:text-black transition-all duration-300 ${
      isActive ? " text-white" : "hover:text-white hover:bg-accenet" 
    }`
  }
  return (
    <header className=" text-white flex items-center justify-between ">
      <img src={`/icons/${imagen}`} alt="Logo" style={{width: "100%", height: "80vh"}} 
      className="header flex-wrap image-header" />
      <div className="title ">
        <h1>{titulo}</h1>
        <div className="title-div grid-cols-2 grid">
          <div><p className='m-auto'>{parrafo}</p></div>
          
          <button className="btn-home m-auto flex ">Buy Now </button>
        </div>
      </div>


        <div className="header-nav">
          <div className="logo"></div>
      <nav>
        <a href="/">Géneros</a>
        <a href="/allgames">Todos los juegos</a>
        <a href="/populares">Juegos populares</a>
        <a href="/contact">Contact Us</a>
        <a href="/añadir">Añadir</a>
        <NavLink to="/favoritos" className={navLinkStyles} title="Carrito de compras">
            Favoritos <FontAwesomeIcon icon={faStar} className="size-4" /> 
          </NavLink>
         {isAuthenticated ? (
          <a href="/login">Login</a>
      )}
      </nav>
        <button style={{margin: '3vh 0 0 0 '}}className="btn-pucharse" >Buy Now </button>
      
        </div>

        

    </header>
  )
}

export default Header
