import { X, RotateCcw } from "lucide-react";

export default function ActiveFilters({ chips, onRemove, onLimpiar }) {
  if (chips.length === 0) return null;
  return (
    <div className="flex flex-wrap items-center gap-2">
      {chips.map((c) => (
        <button
          key={`${c.grupo}-${c.value}`}
          type="button"
          onClick={() => onRemove(c.grupo, c.value)}
          aria-label={`Quitar filtro ${c.label}`}
          className="flex items-center gap-2 rounded-full bg-arena px-4 py-1.5 text-sm font-semibold text-cafe-oscuro hover:bg-borde"
        >
          {c.label}
          <X size={14} aria-hidden="true" />
        </button>
      ))}
      <button type="button" onClick={onLimpiar} className="ml-auto flex items-center gap-1.5 text-sm font-semibold text-cafe hover:underline">
        Limpiar filtros <RotateCcw size={14} aria-hidden="true" />
      </button>
    </div>
  );
}