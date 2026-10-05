export default function Nosotros() {
  return (
    <main className="min-h-screen bg-[#FBF3EA] px-6 pb-20 pt-32">
      <div className="mx-auto max-w-4xl">
        <h1 className="font-serif text-3xl font-bold text-[#44352D] md:text-4xl">
          ¿Quiénes somos?
        </h1>
        <p className="mt-4 max-w-2xl text-[#6b5c4f]">
          Nosotros somos Amado Facundo y Pereyra Geremías. Somos estudiantes de
          programación de la UTN Facultad Regional Tucumán e hicimos Huellas
          Seguras para ayudar a los animales de la ciudad en condiciones de maltrato o ayudarlos a volver a casa, o a
          encontrar una.
        </p>

        <h2 className="mt-12 font-serif text-2xl font-bold text-[#44352D]">
          Qué hacemos
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-[#e6d9cd] bg-white p-5 shadow-sm">
            <h3 className="font-semibold text-[#44352D]">Reportar casos</h3>
            <p className="mt-2 text-[#6b5c4f]">
              Cualquier persona puede avisar de un animal perdido o maltratado.
            </p>
          </div>
          <div className="rounded-xl border border-[#e6d9cd] bg-white p-5 shadow-sm">
            <h3 className="font-semibold text-[#44352D]">Buscar un hogar</h3>
            <p className="mt-2 text-[#6b5c4f]">
              Publicamos animales en adopción para que encuentren una familia.
            </p>
          </div>
          <div className="rounded-xl border border-[#e6d9cd] bg-white p-5 shadow-sm">
            <h3 className="font-semibold text-[#44352D]">Conectar personas</h3>
            <p className="mt-2 text-[#6b5c4f]">
              Unimos a quienes quieren ayudar con refugios y con quienes
              necesitan ayuda.
            </p>
          </div>
        </div>

        <h2 className="mt-12 font-serif text-2xl font-bold text-[#44352D]">
          Nuestra mision
        </h2>
        <p className="mt-4 max-w-2xl text-[#6b5c4f]">
          En Huellas Seguras buscamos facilitar la comunicación entre personas, refugios y quienes necesitan ayuda con animales perdidos, abandonados o en situación de maltrato. Queremos crear un espacio donde cada reporte pueda convertirse en una oportunidad para que un animal vuelva a su hogar o encuentre uno nuevo.
        </p>
 
        {/* Preguntas frecuentes */}
        <h2 className="mt-12 font-serif text-2xl font-bold text-[#44352D]">
          Preguntas frecuentes
        </h2>
        <details className="mt-4 rounded-xl border border-[#e6d9cd] bg-white p-4 shadow-sm text-[#6b5c4f]">
          <summary className="cursor-pointer font-semibold text-[#44352D]">¿Qué es Huellas Seguras?</summary>
          <p>Una página destinada a reportar animales perdidos o que se encuentren en situación de maltrato o abandono. El objetivo es ayudar a estos animales a encontrar un hogar seguro y, en los casos de maltrato, facilitar el acceso a la ayuda que necesiten.</p>
        </details>

        <details className="mt-4 rounded-xl border border-[#e6d9cd] bg-white p-4 shadow-sm text-[#6b5c4f]">
          <summary className="cursor-pointer font-semibold text-[#44352D]">¿Cómo puedo reportar un animal perdido?</summary>
          <p>Dirígete al inicio de la página y selecciona el botón “Reportar un caso”. Allí se abrirá un formulario donde podrás ingresar toda la información necesaria sobre el animal perdido y enviar el reporte.</p>
        </details>

        <details className="mt-4 rounded-xl border border-[#e6d9cd] bg-white p-4 shadow-sm text-[#6b5c4f]">
          <summary className="cursor-pointer font-semibold text-[#44352D]">¿Cómo puedo adoptar un animal?</summary>
          <p>Podés consultar los animales publicados en la sección de adopción y conocer la información disponible sobre cada uno para contactar con la persona o refugio responsable.</p>
        </details>

        <details className="mt-4 rounded-xl border border-[#e6d9cd] bg-white p-4 shadow-sm text-[#6b5c4f]">
          <summary className="cursor-pointer font-semibold text-[#44352D]">¿Puedo colaborar aunque no tenga un animal para reportar?</summary>
          <p>Sí. Compartir casos, brindar información o ponerse en contacto con refugios también puede ayudar a que más animales reciban asistencia.</p>
        </details>
        {/* Contacto */}
        <h2 className="mt-12 font-serif text-2xl font-bold text-[#44352D]">Contacto</h2>
        <ul className="mt-3 text-[#6b5c4f]">
          <li>Teléfono: +54 9 381 000-0000</li>
          <li>Instagram: @huellasseguras</li>
          <li>Email: huellasseguras@gmail.com</li>
        </ul>
      </div>
    </main>
  );
}