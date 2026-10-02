// Contenido de Huellas Seguras.
const defaultItems = [
  {
    title: "Reportá en segundos",
    description:
      "Subí una foto y la ubicación del perro. Refugios y veterinarias cercanas reciben el aviso al instante.",
    image:
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=900&q=80",
    imageAlt: "Persona reportando un caso desde el celular",
  },
  {
    title: "Seguimiento real",
    description:
      "Cada caso queda registrado y podés ver su estado: en atención, en tratamiento o ya en un hogar.",
    image: "/GataSol.jpeg",
    imageAlt: "Veterinaria revisando a un perro rescatado",
  },
  {
    title: "Encontrá a tu perro",
    description:
      "Si se perdió, publicá su ficha y avisamos a la comunidad de tu zona para ayudarte a encontrarlo.",
    image: "/AnimalGere.jpeg",
    imageAlt: "Perro perdido con un cartel de búsqueda",
  },
  {
    title: "Dale un hogar",
    description:
      "Conocé a los perros rescatados que buscan familia y contactá directo con el refugio que los cuida.",
    image: "/PerraDani.jpeg",
    imageAlt: "Familia adoptando a un perro rescatado",
  },
];

function HomeCard({ item }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#A85F3D]/10 bg-white/70 shadow-lg shadow-[#A85F3D]/10 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#A85F3D]/25 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <div className="relative aspect-4/3 w-full overflow-hidden">
        {item.image ? (
          <img
            src={item.image}
            alt={item.imageAlt}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            loading="lazy"
          />
        ) : (
          <div
            role="img"
            aria-label={item.imageAlt}
            className="h-full w-full bg-linear-to-br from-[#F2C078] to-[#D9825B]"
          />
        )}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#A85F3D]/15 transition-colors duration-300 group-hover:bg-[#A85F3D]/0 motion-reduce:transition-none"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6 pb-7">
        <h3 className="font-serif text-xl font-bold text-[#44352D] transition-colors duration-300 group-hover:text-[#A85F3D]">
          {item.title}
        </h3>
        <p className="leading-relaxed text-[#6b5c4f]">{item.description}</p>
      </div>

      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-1.5 w-0 bg-[#A85F3D] transition-all duration-500 group-hover:w-full motion-reduce:transition-none"
      />
    </article>
  );
}

export default function HomeCards({ items = defaultItems, className = "" }) {
  return (
    <section
      id="comoFunciona"
      className={`relative z-10 w-full scroll-mt-0 rounded-t-4xl bg-[#FBF3EA] py-20 sm:py-28 ${className}`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.slice(0, 4).map((item) => (
          <HomeCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}