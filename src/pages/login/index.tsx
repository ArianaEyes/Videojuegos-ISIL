import Header from "../../components/Header"

const Login = () => {
  return (
    <>
       <Header imagen="img1.jpg" titulo="Login" parrafo="Inicia sesión para acceder a tu cuenta y disfrutar de todas las funciones de nuestra aplicación."/>
        <div className="w-full bg-[#1a1a1a] p-8 font-sans justify-centers shadow-black ">
        <h1>Login</h1>
      <form className="login-form">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Login</button>
      </form>
      </div>
       
    </>
  )
}

export default Login

