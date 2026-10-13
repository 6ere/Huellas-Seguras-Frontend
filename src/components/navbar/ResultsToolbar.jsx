import { LayoutGrid,List } from "lucide-react";
import {ORDENES} from "../../data/Filter"


export default function ResultsToolbar({ total, orden, onOrden, vista, onVista }) {
  const btn = (id, Icon, label) => (
    <button
      type="button"
      onClick={() => onVista(id)}
      aria-label={label}
      aria-pressed={vista === id}
      className={`rounded-lg p-2 ${vista === id ? "bg-arena text-cafe-oscuro" : "text-cafe hover:bg-crema"}`}
    >
      <Icon size={20} />
    </button>
  );
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-cafe">{total} resultados</p>
      <div className="flex flex-wrap items-center gap-3">
        <label className="flex items-center gap-2 rounded-lg border border-borde px-3 py-2 text-sm text-cafe">
          Ordenar por:
          <select value={orden} onChange={(e) => onOrden(e.target.value)} className="bg-transparent font-semibold text-cafe-oscuro outline-none">
            {ORDENES.map((op) => <option key={op.value} value={op.value}>{op.label}</option>)}
          </select>
        </label>
        <div className="flex rounded-xl border border-borde p-1">
          {btn("grilla", LayoutGrid, "Vista en grilla")}
          {btn("lista", List, "Vista en lista")}
        </div>
      </div>
    </div>
  );
}