import { useEffect, useRef, useState } from "react";
function Huella({ className = "", style }) {
  return (
    <svg viewBox="0 0 64 64" fill="currentColor" className={className} style={style}>
      <ellipse cx="32" cy="42" rx="14" ry="11" />
      <circle cx="14" cy="26" r="6" />
      <circle cx="26" cy="16" r="6" />
      <circle cx="40" cy="16" r="6" />
      <circle cx="52" cy="26" r="6" />
    </svg>
  );
}

// Iconos de contacto
function Icono({ children, className = "h-7 w-7" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {children}
    </svg>
  );
}

// Animación de entrada al scrollear
function Aparecer({ children, className = "", delay = "delay-0" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisible(true);
          observador.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observador.observe(ref.current);
    return () => observador.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-1000 ease-out motion-reduce:transition-none ${delay} ${
        visible ? "translate-y-0 scale-100 opacity-100" : "translate-y-12 scale-95 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

// Componente para Preguntas Frecuentes
function Pregunta({ pregunta, respuesta }) {
  return (
    <details className="group rounded-3xl border border-white/60 bg-white/40 p-5 shadow-sm backdrop-blur-md transition-all duration-300 hover:bg-white/80 hover:shadow-md open:bg-white/90 open:shadow-lg md:p-6">
      <summary className="flex cursor-pointer items-center justify-between font-serif text-base font-semibold text-[#44352D] outline-none marker:content-none md:text-lg">
        {pregunta}
        <span className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e6d9cd]/50 text-[#44352D] transition-transform duration-500 group-open:rotate-180 group-open:bg-[#44352D] group-open:text-[#FBF3EA]">
          <Icono className="h-5 w-5">
            <polyline points="6 9 12 15 18 9" />
          </Icono>
        </span>
      </summary>
      <div className="mt-4">
        <p className="leading-relaxed text-[#6b5c4f]">{respuesta}</p>
      </div>
    </details>
  );
}

export default function Nosotros() {
  // Estilos 
  const tituloBase = "font-serif text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl";
  const textoBase = "mt-5 text-base leading-relaxed sm:text-lg md:text-xl";
  const titulo = `${tituloBase} text-[#44352D]`;
  const texto = `${textoBase} text-[#6b5c4f]`;

  // Caja para "Somos Huellas Seguras" y "Nuestra misión"
  const caja =
    "relative mx-auto max-w-6xl rounded-[2rem] bg-[#A85F3D] p-6 shadow-[0_20px_50px_rgba(143,78,49,0.3)] sm:p-10 md:rounded-[3rem] md:p-16";

  const iconoHover =
    "flex h-14 w-14 items-center justify-center rounded-full border border-[#44352D]/20 bg-[#44352D]/10 text-[#44352D] shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:bg-[#44352D]/20 hover:shadow-xl hover:shadow-[#44352D]/20";

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FBF3EA]">
      {/* Fondo decorativo general */}
      <div className="pointer-events-none absolute left-[20%] top-[20%] h-125 w-125 rounded-full bg-[#e6d9cd] opacity-50 blur-[120px]" />
      <div className="pointer-events-none absolute right-[10%] top-[60%] h-150 w-150 rounded-full bg-[#f3e1ce] opacity-50 blur-[150px]" />

      {/* Cabecera */}
      <section className="relative overflow-hidden px-6 pb-12 pt-28 text-center md:pb-16 md:pt-32">
        <div className="relative z-10 mx-auto max-w-4xl">
          <span className="mb-4 inline-block rounded-full border border-[#44352D]/15 bg-[#44352D]/10 px-4 py-1.5 text-xs font-medium tracking-wider text-[#44352D] sm:text-sm">
            NUESTRA HISTORIA
          </span>
          <h1 className="font-serif text-5xl font-black text-[#44352D] md:text-7xl">
            Nosotros
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base font-light text-[#6b5c4f] sm:text-lg md:text-2xl">
            Creemos que cada huella pertenece a un corazón que merece volver a casa.
          </p>
        </div>
      </section>

      {/* Somos Huellas Seguras */}
      <section className="relative z-10 px-4 py-12 md:py-20">
        <Aparecer>
          <div className={caja}>
            <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16">
              <div className="md:w-1/2">
                <h2 className={`${tituloBase} text-white`}>Somos Huellas Seguras</h2>
                <p className={`${textoBase} text-white/90`}>
                  Nuestro propósito principal es brindar ayuda, refugio y
                  visibilidad a animales en situación de abandono o maltrato.
                  Trabajamos todos los días con la firme convicción de que,
                  juntos, podemos conseguirles el hogar definitivo que tanto merecen.
                </p>
              </div>

              {/* Imagen con diseño */}
              <div className="group relative w-full md:w-1/2">
                <div className="absolute inset-0 -rotate-6 scale-105 rounded-[2rem] bg-linear-to-br from-[#8F4E31] to-[#D9825B] shadow-lg transition-transform duration-700 ease-out group-hover:-rotate-3 group-hover:scale-100 md:rounded-[3rem]" />
                <div className="relative overflow-hidden rounded-[2rem] border-8 border-white/80 bg-white shadow-2xl backdrop-blur-sm md:rounded-[3rem]">
                  <img
                    src="/Nosotros.jpeg"
                    alt="Equipo de Huellas Seguras"
                    className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-72 md:h-96"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#44352D]/40 to-transparent" />
                </div>

                {/* Insignia flotante */}
                <div className="absolute -bottom-4 -left-3 flex h-16 w-16 items-center justify-center rounded-full bg-[#F2C078] text-[#44352D] shadow-2xl ring-4 ring-[#A85F3D] transition-transform duration-500 hover:rotate-12 hover:scale-110 md:-bottom-6 md:-left-6 md:h-20 md:w-20">
                  <Huella className="h-8 w-8 md:h-10 md:w-10" />
                </div>
              </div>
            </div>
          </div>
        </Aparecer>
      </section>

      {/* Misión */}
      <section className="px-4 py-6 md:py-12">
        <Aparecer>
          <div className={caja}>
            <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:gap-12">
              <div className="group relative w-full md:w-5/12">
                <div className="absolute inset-0 rotate-6 scale-105 rounded-[2rem] bg-linear-to-br from-[#8F4E31] to-[#D9825B] shadow-lg transition-transform duration-700 ease-out group-hover:rotate-3 group-hover:scale-100 md:rounded-[3rem]" />
                <div className="relative flex h-52 flex-col items-center justify-center rounded-[2rem] border-8 border-white/80 bg-[#FBF3EA] p-6 text-center shadow-2xl md:h-72 md:rounded-[3rem]">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F2C078] text-[#44352D] transition-transform duration-500 group-hover:rotate-12">
                    <Huella className="h-8 w-8" />
                  </div>
                  <p className="font-serif text-2xl font-bold text-[#44352D] sm:text-3xl">
                    Cada reporte cuenta
                  </p>
                </div>
              </div>
              <div className="md:w-7/12 md:pl-8">
                <span className="mb-2 block text-sm font-semibold uppercase tracking-widest text-[#F2C078] sm:text-base">
                  Nuestro Propósito
                </span>
                <h2 className={`${tituloBase} text-white`}>Nuestra misión</h2>
                <p className={`${textoBase} text-white/90`}>
                  Queremos que ningún caso pase desapercibido. Por eso reunimos en
                  un solo lugar los reportes de animales perdidos o maltratados,
                  las publicaciones en adopción y el contacto directo con refugios,
                  creando una red solidaria donde ayudar sea más fácil para todos.
                </p>
              </div>
            </div>
          </div>
        </Aparecer>
      </section>

      {/* Preguntas frecuentes */}
      <section className="relative z-10 mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-32">
        <Aparecer>
          <div className="mb-10 text-center md:mb-12">
            <h2 className={titulo}>Preguntas frecuentes</h2>
            <p className="mt-4 text-base text-[#6b5c4f] sm:text-lg">Resolvemos tus dudas principales</p>
          </div>
          <div className="space-y-4">
            <Pregunta
              pregunta="¿Qué es Huellas Seguras?"
              respuesta="Una página destinada a reportar animales perdidos o que se encuentren en situación de maltrato o abandono. El objetivo es ayudar a estos animales a encontrar un hogar seguro y facilitar el acceso a la ayuda que necesiten."
            />
            <Pregunta
              pregunta="¿Cómo puedo reportar un animal perdido?"
              respuesta="Dirígete al inicio de la página y selecciona el botón 'Reportar un caso'. Allí se abrirá un formulario interactivo donde podrás ingresar toda la información y fotografías necesarias."
            />
            <Pregunta
              pregunta="¿Cómo puedo adoptar un animal?"
              respuesta="Puedes explorar nuestro catálogo en la sección de adopción. Al seleccionar un perfil, encontrarás toda la información del animal y los medios de contacto directos con el refugio responsable."
            />
            <Pregunta
              pregunta="¿Puedo colaborar aunque no tenga un animal para reportar?"
              respuesta="¡Absolutamente! Compartir los casos en tus redes sociales, brindar información o donar insumos a los refugios afiliados marca una diferencia gigante en la vida de estos animales."
            />
          </div>
        </Aparecer>
      </section>

      {/* Contacto */}
      <section className="relative mt-10 border-t border-[#44352D]/10 px-6 py-16 text-center md:py-20">
        <Aparecer delay="delay-100">
          <Huella className="mx-auto mb-6 h-12 w-12 text-[#44352D] opacity-100" />
          <h2 className="font-serif text-3xl font-bold text-[#44352D] sm:text-4xl md:text-5xl">
            ¿Y si nos ayudás?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base text-[#6b5c4f] sm:text-lg">
            Escribinos, compartí nuestra misión y sumate para que más animales encuentren el camino de vuelta a casa.
          </p>
          <div className="mt-10 flex justify-center gap-6 md:mt-12">
            <a
              href="https://instagram.com/huellasseguras"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className={iconoHover}
            >
              <Icono>
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </Icono>
            </a>
            <a href="mailto:huellasseguras@gmail.com" aria-label="Email" className={iconoHover}>
              <Icono>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </Icono>
            </a>
            <a href="tel:+5493810000000" aria-label="Llamar" className={iconoHover}>
              <Icono>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </Icono>
            </a>
          </div>
        </Aparecer>
      </section>
    </main>
  );
}