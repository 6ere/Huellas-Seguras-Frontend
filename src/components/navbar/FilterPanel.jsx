import { PawPrint, Search, Heart, X } from "lucide-react";
import SearchInput from "../explorer/SearchInput";
import CategoryButton from "../explorer/CategoryButton";
import FilterGroup from "../explorer/FilterGroup";
import FilterOption from "../explorer/FilterOption"
import {CATEGORIAS,GRUPOS_IZQUIERDA,GRUPOS_DERECHA,ORDENES} from "../../data/Filter"


const ICONOS = { adopcion: Heart, perdidos: Search };
 
function Grupos({ grupos, filtros, onToggle }) {
  return grupos.map((g) => (
    <FilterGroup key={g.id} titulo={g.titulo}>
      {g.opciones.map((op) => (
        <FilterOption
          key={op.value}
          label={op.label}
          swatch={op.swatch}
          checked={filtros[g.id].includes(op.value)}
          onChange={() => onToggle(g.id, op.value)}
        />
      ))}
    </FilterGroup>
  ));
}
 
export default function FilterPanel({
  conteos, onCerrar,
  busqueda, onBusqueda, categoria, onCategoria,
  filtros, onToggle, orden, onOrden, onAplicar, onLimpiar,
}) {
  return (
    <aside className="fixed inset-y-0 left-0 z-50 flex w-full max-w-[430px] flex-col gap-4 overflow-y-auto border-r border-borde bg-crema p-5 shadow-xl lg:static lg:z-auto lg:w-[430px] lg:max-w-none lg:shrink-0 lg:shadow-none">
      <header className="flex items-center gap-3">
        <PawPrint size={28} className="text-cafe" aria-hidden="true" />
        <h2 className="text-xl font-extrabold text-cafe-oscuro">Explorar animales</h2>
        <button type="button" onClick={onCerrar} aria-label="Cerrar filtros" className="ml-auto rounded-lg p-1 text-cafe hover:bg-arena lg:hidden">
          <X size={22} />
        </button>
      </header>
 
      <SearchInput value={busqueda} onChange={onBusqueda} placeholder="Buscar por nombre, raza o palabra clave..." />
 
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-bold text-cafe-oscuro">Categorías</h3>
        {CATEGORIAS.map((c) => (
          <CategoryButton
            key={c.id}
            icon={ICONOS[c.id]}
            label={c.label}
            count={conteos[c.id]}
            active={categoria === c.id}
            onClick={() => onCategoria(c.id)}
          />
        ))}
      </div>
 
      <h3 className="text-sm font-bold text-cafe-oscuro">Filtros</h3>
      <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
        <div><Grupos grupos={GRUPOS_IZQUIERDA} filtros={filtros} onToggle={onToggle} /></div>
        <div>
          <Grupos grupos={GRUPOS_DERECHA} filtros={filtros} onToggle={onToggle} />
          <FilterGroup titulo="Ordenar por">
            <select
              value={orden}
              onChange={(e) => onOrden(e.target.value)}
              className="rounded-lg border border-borde bg-white px-3 py-2 text-sm text-cafe"
            >
              {ORDENES.map((op) => <option key={op.value} value={op.value}>{op.label}</option>)}
            </select>
          </FilterGroup>
        </div>
      </div>
 
      <div className="mt-auto flex flex-col gap-2">
        <button type="button" onClick={onAplicar} className="rounded-xl bg-cafe py-3 text-sm font-bold text-white hover:bg-cafe-oscuro">
          Aplicar filtros
        </button>
        <button type="button" onClick={onLimpiar} className="rounded-xl border border-cafe py-3 text-sm font-bold text-cafe hover:bg-arena">
          Limpiar filtros
        </button>
      </div>
    </aside>
  );
}