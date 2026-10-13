import { NavLink } from "react-router-dom";
import { House, PawPrint, Stethoscope, Building2, Info } from "lucide-react";
import Logo from "../navbar/Logo";

const ITEMS = [
  { to: "/", label: "Inicio", icon: House, end: true },
  { to: "/login/user/", label: "Animales", icon: PawPrint },
  { to: "/login/veterinarias", label: "Veterinarias", icon: Stethoscope },
  { to: "/login/refugios", label: "Refugios", icon: Building2 },
  { to: "/nosotros", label: "Nosotros", icon: Info },
];
 
export default function Sidebar({ panelAbierto, onToggleAnimales }) {
  return (
    <aside className="fixed inset-x-0 bottom-0 z-30 flex border-t border-borde bg-crema md:static md:w-20 md:shrink-0 md:flex-col md:gap-8 md:border-r md:border-t-0 md:px-3 md:py-5 lg:w-48">
      <div className="hidden md:block">
        <Logo />
      </div>
      <nav aria-label="Principal" className="flex flex-1 justify-around md:flex-none md:flex-col md:justify-start md:gap-1">
        {ITEMS.map(({ to, label, icon: Icon, end }) => {
          const esAnimales = to === "/login/user/";
          return (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={esAnimales ? onToggleAnimales : undefined}
              aria-expanded={esAnimales ? panelAbierto : undefined}
              className={({ isActive }) => {
                const activo = esAnimales ? panelAbierto : isActive;
                return `flex flex-col items-center gap-1 px-2 py-2 text-[11px] font-semibold transition-colors md:flex-row md:justify-center md:gap-3 md:rounded-xl md:px-3 md:py-3 md:text-sm lg:justify-start ${
                  activo ? "text-cafe-oscuro md:bg-arena" : "text-cafe hover:bg-arena/60"
                }`;
              }}
            >
              <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
              <span className="md:hidden lg:inline">{label}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}