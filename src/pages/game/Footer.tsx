

const Footer = () => {
  return (
    <footer className="w-full h-[400px]  text-white flex items-center justify-center">
          <div className="footer w-[600px] h-[200px] m-auto flex flex-col items-center gap-8 text-center">
            <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "2.5rem", fontWeight: 900, lineHeight: 1.2, margin: 0 }} className="pt-10">
            Prepárate para <span style={{ color: "#e8192c" }}>nuevas aventuras</span>
            <br />
            <span className="text-[#e8192c]">y más JUEGOS!</span>
          </h2>
           <div className="flex flex-col sm:flex-row gap-4">
            
              <button className="btn-pucharse">Buy Now </button>
        </div>
          </div>

          
        
    </footer>
  )
}

export default Footer
