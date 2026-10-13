export default function HeroBanner({ imagen = "/hero-perro.jpg" }) {
   return (
    <section className="relative flex min-h-36 items-center overflow-hidden rounded-2xl bg-arena px-5 py-5 md:px-8">
      <div className="relative z-10 max-w-md">
        <h1 className="text-2xl font-extrabold text-cafe-oscuro md:text-3xl">Animales en adopción</h1>
        <p className="mt-2 text-lg text-cafe-oscuro/80">Dale una segunda oportunidad a un amigo fiel.</p>
      </div>
      <p className="absolute right-64 top-8 hidden -rotate-6 text-xl italic text-cafe/60 lg:block" aria-hidden="true">
        Adoptá,<br />no compres
      </p>
      <img
        src={imagen}
        alt=""
        onError={(e) => (e.currentTarget.style.display = "none")}
        className="absolute bottom-0 right-6 hidden h-full max-h-36 object-contain sm:block"
      />
    </section>
  );
}
 