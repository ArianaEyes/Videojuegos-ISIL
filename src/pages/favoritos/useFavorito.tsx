import { useCallback, useEffect, useState } from 'react'
import type { Favoritos } from '../../types/Favoritos'

const useFavorito = () => {
    const [listaItems, setListaItems] = useState<Favoritos[]>(() => {
        if(typeof window !== "undefined"){
            const datos = localStorage.getItem("favoritosArray")
            return datos ? JSON.parse(datos) : []
        }
        return []
    })

    useEffect (() => {
        localStorage.setItem("favoritosArray", JSON.stringify(listaItems))
    },[listaItems])

    const actualizarFavoritos = useCallback((nuevosFavoritos: Favoritos[])=>{
        localStorage.setItem("favoritosArray",JSON.stringify(nuevosFavoritos))
        setListaItems(nuevosFavoritos)
        window.dispatchEvent(new Event("favoritosActualizados"))
    },[])


    const vaciarFavorito = useCallback(()=> {
        actualizarFavoritos([])
    },[])

    const eliminarFavorito = useCallback((id:number)=>{
        actualizarFavoritos(
            listaItems.filter(
                item => item.idjuego !== id
            )
        )
    },[listaItems, actualizarFavoritos])


    return { 
        listaItems,
        hasListaItems: Array.isArray(listaItems) && listaItems.length>0,
        vaciarFavorito,
        eliminarFavorito
    }
  
}

export default useFavorito
