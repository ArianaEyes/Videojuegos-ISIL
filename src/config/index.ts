export const CONFIG = {
  API_URL: import.meta.env.VITE_API_BASE_URL,
  ENV: import.meta.env.VITE_ENVIRONMENT,

  ENDPOINTS: {
    VIDEOJUEGOS: "/videojuegos.php",
    VIDEOJUEGOS_PAGINADOS: "/videojuegos_paginados.php",
    GENEROS: "/generos.php",
    RESENAS_USUARIOS: "/resenas_usuarios.php",
    LOGIN: "/login.php",
  },

  VERSION: "1.0.0",
} as const;
