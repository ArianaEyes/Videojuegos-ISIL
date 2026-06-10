import type { Favoritos } from "../types/Favoritos"

export const agregarFavoritos = (idjuego: number, nombre:string, rating:string, resena:string) =>{
    const itemFavoritos: Favoritos = {
        idjuego:idjuego,
        nombre:nombre,
        rating:rating,
        resena:resena
    }

    const favoritos = []
    favoritos.push(itemFavoritos)
    localStorage.setItem("favoritos", JSON.stringify(favoritos))
}