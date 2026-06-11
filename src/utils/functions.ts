import type { Favoritos } from "../types/Favoritos";

export const agregarFavoritos = (
  idjuego: number,
  nombre: string,
  rating: string,
  plataforma: string,
) => {
  const itemFavoritos: Favoritos = {
    idjuego: idjuego,
    nombre: nombre,
    rating: rating,
    plataforma: plataforma,
  };

  const favoritos: Favoritos[] =
    localStorage.getItem("favoritosArray") == null
      ? []
      : JSON.parse(localStorage.getItem("favoritosArray") || "[]");

      const index = favoritos.findIndex(
        item => item,idjuego === itemFavoritos.idjuego
      )

      if(index===1){
        favoritos.push(itemFavoritos)
      }
  favoritos.push(itemFavoritos);
  localStorage.setItem("favoritosArray", JSON.stringify(favoritos));
};
