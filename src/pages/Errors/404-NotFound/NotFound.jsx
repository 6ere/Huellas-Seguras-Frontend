import { Link } from "react-router-dom";
import "./NotFound.css";

function Paw({ className = "", style }) {
  return (
    <svg viewBox="0 0 48 48" className={className} style={style} aria-hidden="true">
      <ellipse cx="24" cy="30" rx="11" ry="9" />
      <ellipse cx="10" cy="16" rx="4.2" ry="5.4" />
      <ellipse cx="20" cy="9" rx="4.2" ry="5.4" />
      <ellipse cx="30" cy="9" rx="4.2" ry="5.4" />
      <ellipse cx="40" cy="16" rx="4.2" ry="5.4" />
    </svg>
  );
}

const rastro = [
  { left: "2%", top: 34 },
  { left: "18%", top: 8 },
  { left: "34%", top: 34 },
  { left: "50%", top: 8 },
  { left: "66%", top: 34 },
  { left: "82%", top: 8 },
];

const focus =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A85F3D]";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl overflow-hidden px-6 py-16 text-center">
      {/* Huellas que caminan */}
      <div className="relative mb-1 h-16" aria-hidden="true">
        {rastro.map((p, i) => (
          <Paw
            key={i}
            className="paw-step absolute h-5.5 w-5.5 fill-[#DFA95F]"
            style={{ left: p.left, top: p.top, animationDelay: `${i * 0.5}s` }}
          />
        ))}
      </div>

      <div role="img" aria-label="Error 404" className="flex items-center justify-center leading-none">
        <span className="font-serif text-[88px] font-bold text-[#A85F3D] sm:text-[104px]">4</span>
        <span className="relative flex h-26 w-22 items-center justify-center">
          <Paw className="paw-bob h-19.5 w-19.5 fill-[#DFA95F]" />
          <span className="paw-shadow absolute bottom-1.5 left-1/2 -ml-5.75 h-2.25 w-11.5 rounded-full bg-[#44352D]" />
        </span>
        <span className="font-serif text-[88px] font-bold text-[#A85F3D] sm:text-[104px]">4</span>
      </div>

      <h1 className="mt-3 font-serif text-2xl font-bold text-[#44352D]">
        Este perro se perdió,
        <br />
        y esta página también
      </h1>
      <p className="mx-auto mb-6 mt-2 max-w-xs text-[#44352D]/80">
        La página que buscás no existe o cambió de lugar. Ayudanos a encontrar el camino de vuelta.
      </p>

      <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link
          to="/"
          className={`rounded-full bg-[#A85F3D] px-6 py-2.5 font-medium text-white transition-colors hover:bg-[#8E4F32] ${focus}`}
        >
          Volver al inicio
        </Link>
        <Link
          to="/perdidos"
          className={`rounded-full border border-[#A85F3D] px-6 py-2.5 font-medium text-[#A85F3D] transition-colors hover:bg-[#F2C078]/30 ${focus}`}
        >
          Ver perros perdidos
        </Link>
      </div>
    </section>
  );
}