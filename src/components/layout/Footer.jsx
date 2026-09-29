const defaultColumns = [
  {
    title: "Explorar",
    links: [
      { label: "Reportar un caso", href: "/reportar" },
      { label: "Casos activos", href: "/casos" },
      { label: "Perros en adopción", href: "/adopciones" },
      { label: "Perros perdidos", href: "/perdidos" },
    ],
  },
  {
    title: "Huellas Seguras",
    links: [
      { label: "Quiénes somos", href: "/nosotros" },
      { label: "Refugios y veterinarias", href: "/aliados" },
      { label: "Preguntas frecuentes", href: "/faq" },
    ],
  },
  {
    title: "Contacto",
    links: [
      {
        label: "contacto@huellasseguras.com",
        href: "mailto:contacto@huellasseguras.com",
      },
      { label: "Instagram", href: "https://instagram.com" },
      { label: "San Miguel de Tucumán, Argentina", href: "#" },
    ],
  },
];

const linkClass =
  "rounded-sm text-white/90 transition-colors hover:text-[#F2C078] focus-visible:text-[#F2C078] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F2C078]";

export default function Footer({ columns = defaultColumns, className = "" }) {
  const year = new Date().getFullYear();

  return (
    <footer className={`relative z-10 w-full text-white ${className}`}>
      <div className="bg-[#A85F3D]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
            {/* Marca */}
            <div className="flex max-w-sm flex-col gap-5 md:col-span-2 lg:col-span-1">
              <a
                href="/"
                className="w-fit rounded-sm font-serif text-3xl font-bold text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F2C078]"
              >
                Huellas Seguras
              </a>
              <p className="leading-relaxed text-white/90">
                Cada reporte acerca a un perro a su hogar. Conectamos a vecinos,
                refugios y veterinarias de tu zona.
              </p>
              <a
                href="/reportar"
                className="mt-1 w-fit rounded-full bg-[#F2C078] px-6 py-2.5 text-base font-medium text-[#44352D] transition-colors hover:bg-[#DFA95F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Reportar un caso
              </a>
            </div>

            {/* Columnas de links */}
            {columns.map((column) => (
              <nav key={column.title} aria-label={column.title}>
                <h3 className="mb-4 font-serif text-xl font-bold text-white">
                  {column.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className={linkClass}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="bg-[#44352D]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-sm text-white/85 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Huellas Seguras. Proyecto final, UTN FRT.</p>
          <ul className="flex gap-6">
            <li>
              <a href="/privacidad" className={linkClass}>
                Privacidad
              </a>
            </li>
            <li>
              <a href="/terminos" className={linkClass}>
                Términos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}