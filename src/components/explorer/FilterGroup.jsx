import { useState } from "react";
import { ChevronUp } from "lucide-react";

export default function FilterGroup({ titulo, children }) {
  const [abierto, setAbierto] = useState(true);
  return (
    <section className="border-b border-borde py-4 last:border-0">
      <button
        type="button"
        onClick={() => setAbierto(!abierto)}
        aria-expanded={abierto}
        className="flex w-full items-center justify-between text-sm font-bold text-cafe-oscuro"
      >
        {titulo}
        <ChevronUp size={18} className={`transition-transform ${abierto ? "" : "rotate-180"}`} aria-hidden="true" />
      </button>
      {abierto && <div className="mt-2 flex flex-col">{children}</div>}
    </section>
  );
}