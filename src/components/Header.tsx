
import { faIdCard, faStar, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link,  NavLink, type NavLinkRenderProps } from "react-router-dom"
import { useAuth } from "../context/AuthContext" 
type HeaderProps = {
  imagen: string
  titulo: string
  parrafo: string
}
  

const Header = ({ imagen, titulo, parrafo }: HeaderProps) => {
  const navLinkStyles = ({ isActive }: NavLinkRenderProps): string => {
    return `block px-3 py-3 text-sm hover:bg-accent hover:text-black transition-all duration-300 ${
      isActive ? " text-white" : "hover:text-white hover:bg-accenet" 
    }`
  }
  const { isAuthenticated, logout} = useAuth()
  return (
    <header className=" text-white flex items-center justify-between ">
      <img src={`/icons/${imagen}`} alt="Logo" style={{width: "100%", height: "80vh"}} 
      className="header flex-wrap image-header" />
      <div className="title ">
        <p className="titulo">{titulo}</p>
        <div className="title-div grid-cols-2 grid">
          <div><p className='m-auto'>{parrafo}</p></div>
          
          <button className="btn-home flex ">Ver más</button>
        </div>
      </div>


        <div className="header-nav">
          <div className="logo"></div>
      <nav>
        
        <Link to="/"><h5 className="text-gray-200 hover:text-red-700 transition-colors duration-200 cursor-pointer">Géneros</h5></Link>
        <Link to="/allgames"><h5 className="text-gray-200 hover:text-red-700 transition-colors duration-200 cursor-pointer">Todos los juegos</h5></Link>
        <Link to="/populares"><h5 className="text-gray-200 hover:text-red-700 transition-colors duration-200 cursor-pointer">Juegos populares</h5></Link>
        <Link to="/contact"><h5 className="text-gray-200 hover:text-red-700 transition-colors duration-200 cursor-pointer">Contact Us</h5></Link>
        <Link to="/añadir"><h5 className="text-gray-200 hover:text-red-700 transition-colors duration-200 cursor-pointer">Añadir</h5></Link>
        <NavLink to="/favoritos" className={`${navLinkStyles} navlink`} title="Carrito de compras">
          <FontAwesomeIcon icon={faStar} className="size-4" /> 
          <h5>Favoritos</h5>
          
        </NavLink>
         {isAuthenticated ? (
          <div className=" authenticated flex items-center gap-2">

            <button className='btn-pucharse hover:bg-white hover:text-black font-bold px-6 py-3 rounded-full transition-all duration-300 shadow-lg shadow-black/20 cursor-pointer text-sm tracking-widest uppercase'>
            <Link to="/login">
            <FontAwesomeIcon icon={faIdCard} className="size-2 mr-1" />
              Perfil
            </Link>
            </button>

            <button 
              type="button"
              onClick={logout}
              className="px-2 py-1 border border-slate-800 hover:border-red-500 hover:text-red-500 rounded-md cursor-pointer transition-all duration-300 btn-logout"
            >
              Cerrar sesión
            </button>
          </div>
          ) : (
            <button className='bg-[#ff0000a2] hover:bg-white hover:text-black font-bold px-8 py-3 rounded-full        transition-all duration-300 shadow-lg shadow-black/20 cursor-pointer text-sm tracking-widest uppercase'>
            <Link to="/login">
              <FontAwesomeIcon icon={faUser} className="size-2 mr-0.5" />
              Iniciar Sesión
            </Link>
            </button>
          )}
      </nav>
        </div>
    </header>
  )
}

export default Header
