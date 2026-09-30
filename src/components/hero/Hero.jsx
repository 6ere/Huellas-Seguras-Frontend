export default function Hero() {
  return (
    <>
      <section
        id="inicio"
        className="fixed inset-0 z-0 flex items-center justify-center overflow-hidden"
      >
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/PerroInicio.mp4"
          poster="/images/hero-perros-poster.jpg"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-[#A85F3D]/60" />

        <div className="relative z-10 mx-auto max-w-3xl px-4 py-32 text-center">
          <h1 className="font-serif text-4xl font-bold text-white md:text-6xl">
            Cada reporte acerca a un perro a su hogar
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/85">
            Huellas Seguras conecta a vecinos, refugios y veterinarias para
            reportar, atender y hacer seguimiento de perros maltratados o
            perdidos en tu zona.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {/* El formulario */}
            <button
              type="button"
              className="rounded-full bg-[#D9825B] px-7 py-3 text-lg font-semibold text-white transition-colors hover:bg-[#A85F3D]"
            >
              Reportar un caso
            </button>
            <a
              href="#casos"
              className="rounded-full bg-[#F2C078] px-7 py-3 text-lg font-medium text-[#44352D] transition-colors hover:bg-[#DFA95F]"
            >
              Ver perros en adopción
            </a>
          </div>
        </div>
      </section>

    
      <div className="h-screen" aria-hidden="true" />
    </>
  );
}
