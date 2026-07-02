import Header from "../../components/Header"

const Login = () => {
  return (
    <>
       <Header imagen="img1.jpg" titulo="Login" parrafo="Inicia sesión para acceder a tu cuenta y disfrutar de todas las funciones de nuestra aplicación."/>
       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#000000] via-[#1a1a1a] to-black p-6">
  <div className="w-full max-w-md rounded-2xl bg-[#1a1a1a] p-8 shadow-2xl border border-[#131313]">
    <h1 className="text-3xl font-bold text-white text-center">
      Bienvenido
    </h1>

    <p className="text-gray-400 text-center mt-2 mb-8">
      Inicia sesión para continuar
    </p>

    <form className="space-y-5 w-full">
      <div>
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Usuario
        </label>

        <input
          type="text"
          id="username"
          placeholder="Ingresa tu usuario"
          className="w-full rounded-lg bg-gray-800 border border-gray-600 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-400/30"
        />
      </div>

      <div >
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Contraseña
        </label>

        <input
          type="password"
          id="password"
          placeholder="Ingresa tu contraseña"
          className="w-full rounded-lg bg-gray-800 border border-gray-600 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-400/30"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-red-800 py-3 font-semibold text-black transition hover:bg-red-600 active:scale-[0.98]"
      >
        Iniciar sesión
      </button>
    </form>

    <p className="mt-6 text-center text-sm text-gray-400">
      ¿No tienes una cuenta?{" "}
      <a
        href="#"
        className="font-semibold text-red-800 hover:text-red-600"
      >
        Regístrate
      </a>
    </p>
  </div>
</div>
       
    </>
  )
}

export default Login

