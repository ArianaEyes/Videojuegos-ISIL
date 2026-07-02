import { useState } from "react"
import Header from "../../components/Header"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import { loginService } from "../../services/auth.service"
import { useMutation } from "@tanstack/react-query"
import Footer from "../../common/Footer"

const Login = () => {
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const navigate = useNavigate()
  const { login } = useAuth()

  const { mutateAsync, isPending } = useMutation({
    mutationFn: ({ email, password }: { email: string, password: string }) => 
      loginService(email, password)
  })

  const handleSubmit = async (formData: FormData) => {
    setErrorMsg(null)
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    try {
      const result = await mutateAsync({ email, password })
      if (result === -1) setErrorMsg('La cuenta no existe')
      else if (result === -2) setErrorMsg('Contraseña incorrecta')
      else if (Array.isArray(result) && result.length > 0) {
        login(result[0])
        navigate('/generos')
      }
    } catch {
      setErrorMsg('Error al conectar con el servidor')
    }
  }
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

    <form action={handleSubmit} className="space-y-5 w-full">
      {errorMsg && (
              <div className="p-3 bg-red-500/10 border border-red-500/50 text-red-500 text-xs font-bold uppercase tracking-widest rounded text-center">
                {errorMsg}
              </div>
            )}
      <div>
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Usuario
        </label>

        <input
          name="email"
          required
          type="text"
          id="username"
          disabled={isPending}
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
          required
          type="password"
          name="password"
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
<Footer/>
       
    </>
  )
}

export default Login

