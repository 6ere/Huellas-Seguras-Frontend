import { useState } from "react";
import { Link } from "react-router-dom";

const NAV_ITEMS = ["Inicio", "Cómo funciona", "Casos", "Sumate", "Contacto"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute inset-x-0 top-0 z-20 bg-[#A85F3D]/90">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-3 px-4 py-6 md:flex-nowrap md:px-6">
        <Link
          to="/"
          className="flex items-center gap-2 font-serif text-lg font-bold text-white"
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 48 48"
            className="fill-[#F2C078]"
            aria-hidden="true"
          >
            <ellipse cx="24" cy="30" rx="11" ry="9" />
            <ellipse cx="10" cy="16" rx="4.2" ry="5.4" />
            <ellipse cx="20" cy="9" rx="4.2" ry="5.4" />
            <ellipse cx="30" cy="9" rx="4.2" ry="5.4" />
            <ellipse cx="40" cy="16" rx="4.2" ry="5.4" />
          </svg>
          Huellas Seguras
        </Link>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-controls="navbarPrincipal"
          aria-expanded={isOpen}
          aria-label="Abrir menú de navegación"
          className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 md:hidden"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <ul
          id="navbarPrincipal"
          className={`${
            isOpen ? "flex" : "hidden"
          } w-full flex-col gap-3 rounded-xl bg-[#8F4E31] p-4 backdrop-blur-sm md:flex md:w-auto md:flex-row md:items-center md:gap-8 md:bg-transparent md:p-0 md:backdrop-blur-none`}
        >
          {NAV_ITEMS.map((label) => (
            <li key={label}>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="border-b-2 border-transparent py-2 text-sm text-white/80 transition-colors hover:border-[#F2C078] hover:text-white md:py-0"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="hidden rounded-full bg-[#D9825B] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-amber-700 md:inline-block"
        >
          Reportar un caso
        </button>
      </div>
    </nav>
  );
}