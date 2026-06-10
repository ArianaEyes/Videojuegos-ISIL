import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import './index.css'
import App from './App.tsx'
import  GenerosDetalle  from './pages/generos/GenerosDetalle.tsx'
import Generos from './pages/generos/Generos.tsx'
import VideojuegosDetalles from './pages/Videojuegos/VideojuegosDetalles.tsx'
import AllGames from './pages/Videojuegos/AllGames.tsx'
import MejoresJuegos from './pages/Videojuegos/MejoresJuegos.tsx'
import Contact from './pages/home/Contact.tsx'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1
    }
  }
})

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    hydrateFallbackElement:<div>Iniciando el sistema</div>,
    children: [
      {
      index: true,
      lazy: async() => {
        return { Component: (await( import('./pages/home/Home.tsx')))
          .default }
      }
    
      }
    ]
},
{
  path: "/generos",
  element: <Generos />,
},
{
  path: "/generos/:id",
  element: <GenerosDetalle  />,
},
{
  path: "/generos/:generoId/videojuegos/:id",
  element: <VideojuegosDetalles />,
},
{
  path: "/allgames",
  element: <AllGames />,
},
{
  path: "/allgames/:id",
  element: <VideojuegosDetalles />,
},
{
  path: "/populares",
  element: <MejoresJuegos />,
},
{
  path: "/populares/:id",
  element: <VideojuegosDetalles />,
}
,
{
  path: "/contact",
  element: <Contact/>,
},
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router = { router } />
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  </StrictMode>,
)
