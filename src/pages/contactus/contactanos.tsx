
const Contactanos = () => {
  return (
    <div className=" contactanos bg-[#1a1a1a] p-8 text-white" >
  <h2 className="text-2xl font-bold mb-4 text-center">Contáctanos</h2>
  <p className="text-xl mb-6 text-center">¿Tienes alguna pregunta o sugerencia? ¡Escríbenos!</p>
  
  <div className="flex flex-col gap-4 w-[50%] formulario">
    <input
      type="text"
      placeholder="Tu nombre"
      className="bg-transparent border border-white rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-400"
    />
    <input
      type="email"
      placeholder="Tu correo"
      className="bg-transparent border border-white rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-400"
    />
    <textarea
      placeholder="Tu mensaje"
      rows={4}
      className="bg-transparent border border-white rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-400 resize-none"
    />
    <button className="border border-white rounded-lg p-3 hover:bg-white hover:text-[#1a1a1a] transition-colors duration-200 font-bold">
      Enviar
    </button>
  </div>
</div>
  )
}

export default Contactanos
