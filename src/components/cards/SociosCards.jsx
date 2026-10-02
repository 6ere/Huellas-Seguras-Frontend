

function PinIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function SocioCard({
  nombre,
  ubicacion,
  descripcion,
  etiquetas = [],
  imagen,
  abierto,
  textoBoton = "Ver información",
  onVerInfo,
}) {
  const mostrarEstado = typeof abierto === "boolean";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#A85F3D]/10 bg-white/70 shadow-lg shadow-[#A85F3D]/10 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#A85F3D]/25 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      {/* Imagen */}
      <div className="aspect-video w-full overflow-hidden">
        {imagen ? (
          <img
            src={imagen}
            alt={nombre}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            loading="lazy"
          />
        ) : (
          <div
            role="img"
            aria-label={`Sin imagen de ${nombre}`}
            className="h-full w-full bg-linear-to-br from-[#F2C078] to-[#D9825B]"
          />
        )}
      </div>

      {/* Contenido */}
      <div className="flex flex-1 flex-col gap-3 p-6">
        <header className="flex items-start justify-between gap-3">
          <h3 className="font-serif text-xl font-bold text-[#44352D] transition-colors duration-300 group-hover:text-[#A85F3D]">
            {nombre}
          </h3>
          {mostrarEstado && (
            <span
              className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                abierto
                  ? "bg-green-100 text-green-800"
                  : "bg-[#44352D]/10 text-[#6b5c4f]"
              }`}
            >
              {abierto ? "Abierto" : "Cerrado"}
            </span>
          )}
        </header>

        <p className="flex items-center gap-1.5 text-sm text-[#6b5c4f]">
          <PinIcon className="h-3.5 w-3.5 text-[#A85F3D]" />
          {ubicacion}
        </p>

        <p className="leading-relaxed text-[#44352D]">{descripcion}</p>

        {etiquetas.length > 0 && (
          <ul className="flex flex-wrap gap-1.5">
            {etiquetas.map((etiqueta) => (
              <li
                key={etiqueta}
                className="rounded-full bg-[#F2C078]/40 px-2.5 py-0.5 text-xs font-medium text-[#44352D]"
              >
                {etiqueta}
              </li>
            ))}
          </ul>
        )}

        <button
          type="button"
          onClick={onVerInfo}
          className="mt-auto w-full cursor-pointer rounded-full border border-[#A85F3D]/40 bg-transparent py-2.5 text-sm font-semibold text-[#A85F3D] transition-colors hover:bg-[#A85F3D] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A85F3D]"
        >
          {textoBoton}
        </button>
      </div>
    </article>
  );
}