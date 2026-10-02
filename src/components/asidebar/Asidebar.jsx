import { useState } from "react";
import { FILTROS, valoresIniciales } from "../../data/filtros";

function Icono({ children, className = "h-5 w-5" }) {
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
      {children}
    </svg>
  );
}

function Grupo({ grupo, valor, onChange }) {
  const [abierto, setAbierto] = useState(true);
  const id = `grupo-${grupo.clave}`;

  return (
    <div className="border-t border-[#A85F3D]/10 py-4">
      <button
        type="button"
        onClick={() => setAbierto((o) => !o)}
        aria-expanded={abierto}
        aria-controls={id}
        className="flex w-full cursor-pointer items-center justify-between text-left text-sm font-semibold text-[#44352D]"
      >
        {grupo.titulo}
        <Icono className={`h-4 w-4 transition-transform ${abierto ? "" : "rotate-180"}`}>
          <path d="m18 15-6-6-6 6" />
        </Icono>
      </button>

      {abierto && (
        <div id={id} className="mt-3">
          {grupo.tipo === "texto" ? (
            <>
              <input
                type="text"
                value={valor}
                onChange={(e) => onChange(e.target.value)}
                placeholder={grupo.placeholder}
                aria-label={grupo.titulo}
                className="w-full rounded-full border border-[#A85F3D]/20 bg-white px-4 py-2 text-sm text-[#44352D] placeholder:text-[#6b5c4f]/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A85F3D]"
              />
              {grupo.ayuda && <p className="mt-2 text-xs text-[#6b5c4f]">{grupo.ayuda}</p>}
            </>
          ) : (
            <ul className="flex flex-col gap-2.5">
              {grupo.opciones.map((op) => (
                <li key={op}>
                  <label className="flex cursor-pointer items-center gap-2.5 text-sm text-[#6b5c4f]">
                    {grupo.tipo === "radio" ? (
                      <input
                        type="radio"
                        name={grupo.clave}
                        checked={valor === op}
                        onChange={() => onChange(op)}
                        className="h-4 w-4 cursor-pointer accent-[#A85F3D]"
                      />
                    ) : (
                      <input
                        type="checkbox"
                        checked={valor.includes(op)}
                        onChange={() =>
                          onChange(valor.includes(op) ? valor.filter((o) => o !== op) : [...valor, op])
                        }
                        className="h-4 w-4 cursor-pointer accent-[#A85F3D]"
                      />
                    )}
                    {op}
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default function Asidebar({ conteos = {}, onAplicar, className = "" }) {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("adopcion");
  const [filtros, setFiltros] = useState(() => valoresIniciales("adopcion"));

  const cambiarCategoria = (nueva) => {
    if (nueva === categoria) return;
    setCategoria(nueva);
    setFiltros(valoresIniciales(nueva)); 
  };

  const cambiarFiltro = (clave, valor) => setFiltros((prev) => ({ ...prev, [clave]: valor }));

  const aplicar = (e) => {
    e.preventDefault();
    onAplicar?.({ busqueda, categoria, filtros });
  };

  const limpiar = () => {
    const limpios = valoresIniciales(categoria);
    setBusqueda("");
    setFiltros(limpios);
    onAplicar?.({ busqueda: "", categoria, filtros: limpios });
  };

  const categorias = [
    {
      clave: "adopcion",
      texto: "Animales en adopción",
      conteo: conteos.adopcion,
      icono: <path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z" />,
      colorConteo: "bg-[#A85F3D] text-white",
    },
    {
      clave: "perdidos",
      texto: "Animales perdidos",
      conteo: conteos.perdidos,
      icono: (
        <>
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
        </>
      ),
      colorConteo: "bg-[#44352D]/10 text-[#6b5c4f]",
    },
  ];

  const config = FILTROS[categoria];

  return (
    <aside
      aria-label="Filtros de animales"
      className={`w-full rounded-3xl border border-[#A85F3D]/10 bg-white/70 p-5 shadow-lg shadow-[#A85F3D]/10 lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto ${className}`}
    >
      <form onSubmit={aplicar}>
        {/* Encabezado */}
        <h2 className="flex items-center gap-3 font-serif text-xl font-bold text-[#44352D]">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F2C078]/50 text-[#A85F3D]">
            <svg viewBox="0 0 48 48" className="h-5 w-5 fill-current" aria-hidden="true">
              <ellipse cx="24" cy="30" rx="11" ry="9" />
              <ellipse cx="10" cy="16" rx="4.2" ry="5.4" />
              <ellipse cx="20" cy="9" rx="4.2" ry="5.4" />
              <ellipse cx="30" cy="9" rx="4.2" ry="5.4" />
              <ellipse cx="40" cy="16" rx="4.2" ry="5.4" />
            </svg>
          </span>
          Explorar animales
        </h2>

        {/* Búsqueda */}
        <label className="relative mt-5 block">
          <span className="sr-only">Buscar por nombre, raza o palabra clave</span>
          <Icono className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6b5c4f]">
            <circle cx="11" cy="11" r="7" />
            <path d="m21 21-4.3-4.3" />
          </Icono>
          <input
            type="search"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder={
              categoria === "perdidos"
                ? "Buscar por nombre, color o descripción..."
                : "Buscar por nombre, raza o palabra clave..."
            }
            className="w-full rounded-full border border-[#A85F3D]/20 bg-white py-2.5 pl-10 pr-4 text-sm text-[#44352D] placeholder:text-[#6b5c4f]/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A85F3D]"
          />
        </label>

        {/* Categorías */}
        <h3 className="mt-6 text-sm font-semibold text-[#44352D]">Categorías</h3>
        <div className="mt-3 flex flex-col gap-2">
          {categorias.map((c) => {
            const activa = categoria === c.clave;
            return (
              <button
                key={c.clave}
                type="button"
                onClick={() => cambiarCategoria(c.clave)}
                aria-pressed={activa}
                className={`flex w-full cursor-pointer items-center gap-3 rounded-2xl border px-3 py-2.5 text-left text-sm transition-colors ${
                  activa
                    ? "border-[#A85F3D]/30 bg-[#F2C078]/40 font-semibold text-[#44352D]"
                    : "border-[#A85F3D]/10 bg-white text-[#6b5c4f] hover:bg-[#F2C078]/20"
                }`}
              >
                <Icono className="h-5 w-5 shrink-0 text-[#A85F3D]">{c.icono}</Icono>
                <span className="flex-1">{c.texto}</span>
                {c.conteo !== undefined && (
                  <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${c.colorConteo}`}>
                    {c.conteo}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Filtros  */}
        <h3 className="mt-7 mb-2 text-sm font-semibold text-[#44352D]">{config.titulo}</h3>
        {config.grupos.map((g) => (
          <Grupo
            key={`${categoria}-${g.clave}`}
            grupo={g}
            valor={filtros[g.clave]}
            onChange={(valor) => cambiarFiltro(g.clave, valor)}
          />
        ))}

        {/* Acciones */}
        <div className="mt-2 flex flex-col gap-2.5 border-t border-[#A85F3D]/10 pt-5">
          <button
            type="submit"
            className="w-full cursor-pointer rounded-full bg-[#A85F3D] py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#8F4E31] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A85F3D]"
          >
            Aplicar filtros
          </button>
          <button
            type="button"
            onClick={limpiar}
            className="w-full cursor-pointer rounded-full border border-[#A85F3D]/40 bg-transparent py-2.5 text-sm font-semibold text-[#A85F3D] transition-colors hover:bg-[#A85F3D] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A85F3D]"
          >
            Limpiar filtros
          </button>
        </div>
      </form>
    </aside>
  );
}