import { MapPin, User, ChevronDown } from "lucide-react";

export default function TopBar({ ubicacion = "San Miguel de Tucumán" }) {
  return (
    <div className="flex items-center justify-end gap-6 text-sm font-semibold text-cafe-oscuro">
      <span className="hidden items-center gap-1.5 sm:flex">
        <MapPin size={18} className="text-cafe" aria-hidden="true" />
        {ubicacion}
      </span>
      <button type="button" className="flex items-center gap-2 rounded-full px-2 py-1 hover:bg-arena">
        <span className="grid size-9 place-items-center rounded-full border border-borde bg-crema">
          <User size={20} aria-hidden="true" />
        </span>
        Mi cuenta
        <ChevronDown size={16} aria-hidden="true" />
      </button>
    </div>
  );
}