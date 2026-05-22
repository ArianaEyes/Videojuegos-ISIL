

const Header = () => {
  return (
    <header className="header text-white flex items-center justify-between px-4">
      <div className="title">
        <h1>Play with Us</h1>
        <div className="title-div grid-cols-2 grid">
          <div><p className='m-auto'>La mejor página para saber que jugar!</p></div>
          
          <button className="btn-pucharse m-auto flex ">Buy Now </button>
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
