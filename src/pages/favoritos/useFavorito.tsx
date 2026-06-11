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

    const quitarFavorito = useCallback(()=>{
        setListaItems([])
    },[])

    return { 
        listaItems,
        hasListaItems: Array.isArray(listaItems) && listaItems.length>0,
        quitarFavorito
    }
  
}

export default useFavorito
