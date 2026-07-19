import { useSearchParams } from "react-router-dom"

interface Props{
    totalPaginas: number
    paginaActual: number
}
const Paginacion = ({totalPaginas, paginaActual} : Props) =>{
    const [searchParams, setSearchParams] = useSearchParams()
    if(totalPaginas<= 1) return null

    const cambiarPagina = (nuevaPagina: number) =>{
        searchParams.set('pagina', nuevaPagina.toString())
        setSearchParams(searchParams)

    }

    return(
        <nav className="flex items-center justify-center gap-4 mt-8 pb-6">
    <button
        onClick={() => cambiarPagina(paginaActual - 1)}
        disabled={paginaActual <= 1}
        className="
            px-5 py-2
            rounded-lg
            border border-gray-700
            bg-gray-900
            text-white
            transition-all duration-200
            hover:bg-red-600 hover:border-red-600
            disabled:bg-gray-800
            disabled:text-gray-500
            disabled:border-gray-800
            disabled:cursor-not-allowed
        "
    >
        ← Anterior
    </button>

    <div className="px-5 py-2 rounded-lg bg-red-600 text-white shadow-lg">
        <span className="text-sm">Página </span>
        <span className="font-bold text-lg">{paginaActual}</span>
        <span className="text-sm text-red-100"> / {totalPaginas}</span>
    </div>

    <button
        onClick={() => cambiarPagina(paginaActual + 1)}
        disabled={paginaActual >= totalPaginas}
        className="
            px-5 py-2
            rounded-lg
            border border-gray-700
            bg-gray-900
            text-white
            transition-all duration-200
            hover:bg-red-600 hover:border-red-600
            disabled:bg-gray-800
            disabled:text-gray-500
            disabled:border-gray-800
            disabled:cursor-not-allowed
        "
    >
        Siguiente →
    </button>
</nav>
    )
}

export default Paginacion