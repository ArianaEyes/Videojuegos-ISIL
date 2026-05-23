import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import './index.css'
import App from './App.tsx'
import  GenerosDetalle  from './pages/Generos/GenerosDetalle.tsx'
import Generos from './pages/Generos/Generos.tsx'
import VideojuegosDetalles from './pages/Videojuegos/VideojuegosDetalles.tsx'

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
        return { Component: (await( import('./pages/Home/Home.tsx')))
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
  path: "/generos/:id/videojuegos/:id",
  element: <VideojuegosDetalles />,
}
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router = { router } />
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  </StrictMode>,
)
