import { Heart, PawPrint, MapPin, Calendar, Ruler, Mars, Venus } from "lucide-react";

function Dato({ icon: Icon, children }) {
  return (
    <span className="flex items-center gap-1.5">
      <Icon size={14} aria-hidden="true" /> {children}
    </span>
  );
}

export default function AnimalCard({ animal, onVerMas, onFavorito }) {
  const SexoIcon = animal.sexo === "Hembra" ? Venus : Mars;
  const reciente = animal.estado === "reciente";

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-borde bg-white">
      <div className="relative aspect-[4/3] bg-arena">
        {animal.foto ? (
          <img
            src={animal.foto}
            alt={`${animal.nombre}, ${animal.edadTexto}`}
            loading="lazy"
            onError={(e) => (e.currentTarget.style.display = "none")}
            className="size-full object-cover"
          />
        ) : null}
        <PawPrint size={48} className="absolute inset-0 m-auto -z-0 text-cafe/20" aria-hidden="true" />
        <span className={`absolute left-2 top-2 rounded-full px-3 py-1 text-xs font-bold text-white ${reciente ? "bg-naranja" : "bg-oliva"}`}>
          {reciente ? "Recién publicado" : "En adopción"}
        </span>
        <button
          type="button"
          onClick={() => onFavorito?.(animal)}
          aria-label={`Guardar a ${animal.nombre} en favoritos`}
          className="absolute right-2 top-2 grid size-9 place-items-center rounded-full bg-white/90 text-cafe hover:bg-white"
        >
          <Heart size={18} />
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="text-lg font-extrabold text-cafe-oscuro">{animal.nombre}</h3>
        <p className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-cafe">
          <Dato icon={SexoIcon}>{animal.sexo}</Dato>
          <Dato icon={Calendar}>{animal.edadTexto}</Dato>
          <Dato icon={Ruler}>{animal.tamanoTexto}</Dato>
        </p>
        <p className="flex items-center gap-1.5 text-xs text-cafe">
          <MapPin size={14} aria-hidden="true" /> {animal.zona} · {animal.km} km
        </p>
        <ul className="flex flex-wrap gap-1.5">
          {animal.etiquetas.map((e) => (
            <li key={e} className="rounded-full bg-arena px-2.5 py-1 text-[11px] font-semibold text-cafe-oscuro">{e}</li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => onVerMas?.(animal)}
          className="mt-auto rounded-lg bg-cafe py-2.5 text-sm font-bold text-white hover:bg-cafe-oscuro"
        >
          Ver más
        </button>
      </div>
    </article>
  );
}