

const stats = [
  { value: '11,000+', label: 'Clients Trust Reacthemes' },
  { value: '10',      label: 'Years of Experiences' },
  { value: 'Free',    label: 'Lifetime Update' },
];

const imageninfo = [
    { imagen: "/public/icons/telefono-inteligente.png", titulo: "Ya sean jugadores de celular", descripcion: "Son uno de los más tryhards, se esfuerzan por dominar los juegos más populares. Incluso en juegos de PC, se adaptan rápidamente a los controles táctiles y pueden competir con jugadores de teclado y ratón." },
    { imagen:"/public/icons/pc-de-escritorio.png", titulo: "Los jugadores de PC", descripcion: "Son conocidos por su dedicación y pasión por los videojuegos. A menudo, buscan la mejor experiencia de juego posible, invirtiendo en hardware de alta gama y personalizando sus configuraciones para obtener el máximo rendimiento." },
    { imagen:"/public/icons/consola-de-juego.png", titulo: "Los jugadores de consola", descripcion: "Son conocidos por su comodidad y accesibilidad. Disfrutan de la experiencia de juego en un entorno relajado, a menudo en el sofá, y valoran la simplicidad y la facilidad de uso que ofrecen las consolas." },
]

export default function FeaturesSection() {
  return (
    <div className="bg-[#1a1a1a] p-8 font-sans justify-centers conteiner ">
       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-[70%] "style={{ margin: '2.5rem auto' }}>
        {imageninfo.map((s, i) => (
          <div key={i} style={{ padding: '2.5rem 1.5rem' }} className="w-[100%] rounded-lg flex flex-col
           items-center gap-2 hover:scale-[1.02] transition-transform">
            <img src={s.imagen} alt={s.titulo} className="w-24 h-24 mb-4" />
            <h3 className="text-white font-bold text-lg mb-2">{s.titulo}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{s.descripcion}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-[70%] "style={{ margin: '2.5rem auto' }}>
        {stats.map((s, i) => (
          <div key={i} style={{ padding: '2.5rem 1.5rem' }} className="bg-[#e8192c] w-[100%] rounded-lg h-50 px-6 flex flex-col
           items-center gap-2 hover:scale-[1.02] transition-transform">
            <span className="text-white font-bold text-5xl">{s.value}</span>
            <span className="text-red-200 text-sm font-medium">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}