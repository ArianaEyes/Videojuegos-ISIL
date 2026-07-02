interface AuthContextType {
    usuario: Usuario | null
    login: (usuario: Usuario) => void
    logout: () => void
    isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [usuario, setUsuario] = useState<Usuario | null>(null)

    useEffect{() => {
        const storedUsuario = localStorage.getItem("usuario")
        if (storedUsuario) {
            try{
                setUsuario(JSON.parse(storedUsuario))
            }catch(e){
                localStorage.removeItem("usuario")
            }
        }
    },[]}
}
