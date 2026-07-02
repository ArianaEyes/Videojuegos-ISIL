import { createContext, useState, type ReactNode, useContext } from "react"
import type { Usuario } from "../types/Usuario"

interface AuthContextType {
    usuario: Usuario | null
    login: (usuario: Usuario) => void
    logout: () => void
    isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [usuario, setUsuario] = useState<Usuario | null>(()=>{

        const storedUsuario = localStorage.getItem("usuario")
        if (storedUsuario) {
            try{
                setUsuario(JSON.parse(storedUsuario))
            }catch(e){
                localStorage.removeItem("usuario")
            }
        }
        return null
    })

    const login = (usuario: Usuario) => {
        localStorage.setItem("usuario", JSON.stringify(usuario))
        setUsuario(null)
    }

    const logout = () => {
        localStorage.removeItem("usuario")
        setUsuario(null)
    }

    const isAuthenticated = !!usuario

    return(
        <AuthContext.Provider value={{usuario, login, logout, isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () =>{
    const context = useContext(AuthContext)
    if(!context)
        {
            throw new Error("useAuth debe ser utilizado dentro de un AuthProvider")

        }
        return context 
}
