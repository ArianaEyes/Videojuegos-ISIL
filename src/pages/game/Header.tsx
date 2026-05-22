
type HeaderProps = {
  imagen: string
  titulo: string
  parrafo: string
}

const Header = ({ imagen, titulo, parrafo }: HeaderProps) => {
  return (
    <header className=" text-white flex items-center justify-between ">
      <img src={`/icons/${imagen}`} alt="Logo" style={{width: "100%", height: "80vh"}} 
      className="header flex-wrap" />
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
        <a>Games</a>
        <a>Services</a>
        <a>Credits</a>
        <a>Page</a>
        <a>Blog</a>
        <a>Contact Us</a>
      </nav>
        <button style={{margin: '3vh 0 0 0 '}}className="btn-pucharse" >Buy Now </button>
      
        </div>

        

    </header>
  )
}

export default Header
