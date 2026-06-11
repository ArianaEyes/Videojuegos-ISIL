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
  favoritos.push(itemFavoritos);
  localStorage.setItem("favoritosArray", JSON.stringify(favoritos));
};
